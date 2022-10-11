import { useEffect, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid)
      setFormIsValid(true);
    else
      setFormIsValid(false);
  }, [enteredNameIsValid]);

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const onBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input onBlur={onBlurHandler} onChange={onChangeHandler} value={enteredName} type='text' id='name' />
      </div>
      { nameInputIsInvalid && <p className="error-text">Name must not be Empty!</p> }
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
