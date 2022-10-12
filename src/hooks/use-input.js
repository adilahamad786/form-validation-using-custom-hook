import { useState } from "react";

const useInput = (ValidateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = ValidateValue(enteredValue);
    const inputIsInvalid = !valueIsValid && isTouched;

    const onChange = (event)  => {
        setEnteredValue(event.target.value);
    }

    const onBlur = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false)
    }

    return {
        enteredValue,
        valueIsValid,
        inputIsInvalid,
        onChange,
        onBlur,
        reset
    }
}

export default useInput;