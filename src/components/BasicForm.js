import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    inputIsInvalid: firstNameHasError,
    onChange : firstNameChangeHandler,
    onBlur : firstNameBlurHandler,
    reset : firstNameReset
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    inputIsInvalid: lastNameHasError,
    onChange : lastNameChangeHandler,
    onBlur : lastNameBlurHandler,
    reset : lastNameReset
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    inputIsInvalid: emailHasError,
    onChange : emailChangeHandler,
    onBlur : emailBlurHandler,
    reset : emailReset
  } = useInput(isEmail);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (firstNameIsValid && lastNameIsValid && emailIsValid)
      setFormIsValid(true);
    else
      setFormIsValid(false);
  }, [firstNameIsValid, lastNameIsValid, emailIsValid]);

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (firstNameHasError || lastNameHasError || emailHasError)
      return;

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          { firstNameHasError && <p className={firstNameClasses}>Please enter a first name.</p> }
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          { lastNameHasError && <p className={lastNameClasses}>Please enter a last name.</p> }
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        { emailHasError && <p className={emailClasses}>Please enter a valid email.</p> }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
