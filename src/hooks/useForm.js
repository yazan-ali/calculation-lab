import { useState } from 'react';

function useForm(iniatialVal = ""){
    const [state, setState] = useState(iniatialVal);
    const handleChange = (evt) => {
        setState(evt.target.value);
    };
    const reset = () =>{
        setState("");
    }

    return [state, handleChange, reset];
}

export default useForm;