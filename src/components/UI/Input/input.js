import React from "react";
import Classes from "./input.module.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = [Classes.InputElement];
  if (props.invalid && props.validate && props.touched) {
    inputClasses.push(Classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
      case "textarea":
        inputElement = (
          <textarea
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;

    case "select":
      inputElement = (
        <select className={inputClasses.join(" ")} onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div className={Classes.Input}>
      <label className={Classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
