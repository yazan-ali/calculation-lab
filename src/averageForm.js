import React from 'react';
import useForm from './hooks/useForm';
import './root.css';

function AverageForm({handleAddValue, clear}){
   const [value, setValue, resetValue] = useForm();

   function handleSubmit(e){
       e.preventDefault(); 
       (value > 0 && !isNaN(value)) && handleAddValue(Number(value));
       resetValue()
   }

    return(
        <form onSubmit={handleSubmit}>
            <h3 className="avrH1">Average <i onClick={() => clear()} class="reset fas fa-redo-alt"></i> </h3>
            <input type="text" value={value} onChange={setValue} placeholder="Add Value" />
            { (value < 0 || isNaN(value)) && <p className="error" >Please enter a positive value</p> }
        </form>
    );
};

export default AverageForm;