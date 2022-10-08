import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input onChange={onChangeHandler} value={enteredName} type='text' id='name' />
      </div>
      { !enteredNameIsValid && <p className="error-text">Name must not be Empty!</p> }
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
