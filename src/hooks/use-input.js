// import { useState } from "react";
import { useReducer } from "react";

const initialState = {
    value : '',
    isTouched : false
}

const reducer = (state, action) => {
    if (action.type === "INPUT")
        return {...state, value : action.value};
    if (action.type === "BLUR")
        return {value : state.value, isTouched : true};
    if (action.type === "RESET")
        return {value : '', isTouched : false};
    return initialState;
}

const useInput = (ValidateValue) => {
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const valueIsValid = ValidateValue(state.value);
    const inputIsInvalid = !valueIsValid && state.isTouched;

    const onChange = (event)  => {
        // setEnteredValue(event.target.value);
        dispatch({type : "INPUT", value : event.target.value.trim()});
    }

    const onBlur = () => {
        // setIsTouched(true);
        dispatch({type : "BLUR"});
    }

    const reset = () => {
        // setEnteredValue('');
        // setIsTouched(false)
        dispatch({type : "RESET"});
    }

    return {
        enteredValue : state.value,
        valueIsValid,
        inputIsInvalid,
        onChange,
        onBlur,
        reset
    }
}

export default useInput;