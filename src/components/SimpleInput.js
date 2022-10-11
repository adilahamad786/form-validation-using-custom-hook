import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const onBlurHandler = () => {

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
    }
  }

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== '')
      setEnteredNameIsValid(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true );
    setEnteredName('');
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input onBlur={onBlurHandler} onChange={onChangeHandler} value={enteredName} type='text' id='name' />
      </div>
      { nameInputIsInvalid && <p className="error-text">Name must not be Empty!</p> }
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
