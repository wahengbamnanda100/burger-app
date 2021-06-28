import React, { Component } from "react";
import Button from "../../components/UI/button/button";
import Classes from "./contactData.module.css";
import axios from "../../axios-burger";
import Spinner from "../../components/UI/spinner/spinner";
import Input from "../../components/UI/Input/input";

class contactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First name",
        },
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last name",
        },
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Your Street",
        },
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip code",
        },
        value: "",
        validation: {
          require: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: "",
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      phone: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Your number",
        },
        value: "",
        validation: {
          require: true,
          minNumberLength: 10,
          maxNumberLength: 10,
        },
        valid: false,
        touched: false,
      },
      deliveryOption: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "", displayValue: "Select Delivery mode", disabled: true },
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "Fastest", 
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
    loading: false,
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.require) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.minNumberLength) {
      isValid = value.length >= rules.minNumberLength && isValid;
    }

    if (rules.maxNumberLength) {
      isValid = value.length <= rules.maxNumberLength && isValid;
    }

    return isValid;
  }

  clickHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};
    for (let formDataElementIdentifier in this.state.orderForm) {
      formData[formDataElementIdentifier] = this.state.orderForm[
        formDataElementIdentifier
      ].value;
    }
    const order = {
      ingredient: this.props.ingridents,
      price: this.props.price,
      orderData: formData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.props.history.push("/");
        this.setState({ loading: false });
        console.log(response.data);
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  inputChangeHandler(event, identifier) {
    const updatedForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedForm[identifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedForm[identifier] = updatedFormElement;
    updatedFormElement.touched = true;

    let isFormValid = true;
    for (let inputIdentifier in updatedForm) {
      isFormValid = updatedForm[inputIdentifier].valid && isFormValid;
    }

    this.setState({ orderForm: updatedForm, formIsValid: isFormValid });
  }

  render() {
    const fromElementArray = [];
    for (let key in this.state.orderForm) {
      fromElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={(this.clickHandler)}> 
      {/* <form onSubmit={(this, this.clickHandler)}></form> */}
        {fromElementArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.value}
            invalid={!formElement.config.valid}
            validate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangeHandler(event, formElement.id)}
          />
        ))}
        <Button btntype="Success" disabled={!this.state.formIsValid}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter Contact data</h4>
        {form}
      </div>
    );
  }
}

export default contactData;
