import { useEffect, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid)
      setFormIsValid(true);
    else
      setFormIsValid(false);
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const onNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const onEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const onNameBlurHandler = () => {
    setEnteredNameTouched(true);      
  }

  const onEmailBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control' ;
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input onBlur={onNameBlurHandler} onChange={onNameChangeHandler} value={enteredName} type='text' id='name' />
      </div>
      { nameInputIsInvalid && <p className="error-text">Name must not be Empty!</p> }
      <div className={emailInputClasses} >
        <label htmlFor='email'>Your E-Mail</label>
        <input onBlur={onEmailBlurHandler} onChange={onEmailChangeHandler} value={enteredEmail} type='email' id='email' />
      </div>
      { emailInputIsInvalid && <p className="error-text">Name must not be Empty!</p> }
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
