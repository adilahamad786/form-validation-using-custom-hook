import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    enteredValue : enteredName,
    valueIsValid : enteredNameIsValid,
    inputIsInvalid : nameInputHasError,
    onChange : nameChangeHandler,
    onBlur : nameBlurHandler,
    reset : resetNameInput
  } = useInput((enteredValue) => enteredValue.trim() !== "");

  const {
    enteredValue : enteredEmail,
    valueIsValid : enteredEmailIsValid,
    inputIsInvalid : emailInputHasError,
    onChange : emailChangeHandler,
    onBlur : emailBlurHandler,
    reset : resetEmailInput
  } = useInput((enteredValue) => enteredValue.includes('@'));

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) setFormIsValid(true);
    else setFormIsValid(false);
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be Empty!</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Name must not be Empty!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
