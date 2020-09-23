import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './main.css';

function Random(){
  const [lower, setLower] = useForm("");
  const [upper, setUpper] = useForm(""); 
  let random 

  function generateRandom(){
    random=Math.floor(Math.random()* Number(upper) + 1);
    while(random < lower){
    random=Math.floor(Math.random()* Number(upper) + 1);	
    }
    return random;	
    }

  const [result, setResult] = useState(0);

  function getResult(e){
    generateRandom();
    e.preventDefault()
    setResult(random)
}
    return(
       <div className="root">
         <h1 className="mb-4">Random Number Generator</h1>
        <div className="jumbotron">
        <form onSubmit={getResult}>
            <div className="form-group row">
              <label htmlFor="input1" className="col-sm-3 col-form-label">Lower Limit</label>
              <div className="col-sm-6">
              <input type="text" className="form-control" name="lower" value={lower} onChange={setLower} id="input1"/>
              {/* { lower < 0 && <p className="error" >Please enter a positive value</p> } */}
              </div>
            </div>

            <div className="form-group row">
             <label htmlFor="input3" className="col-sm-3 col-form-label">Upper Limit</label>
             <div className="col-sm-6">
             <input type="text" className="form-control" name="upper" value={upper} onChange={setUpper} id="input3"/>
             {/* { upper < 0 && <p className="error" >Please enter a positive value</p> } */}
            </div>
           </div>

           <button className="button2 mb-3">Generate</button>
           </form>
           { result > 0 && ( 
           <div className="result2">
           <ul className="list-group ml-2">
             <li className="list-group-item"> <span> <strong>Result: </strong> </span> {result}</li>
           </ul>	
           </div>
           )}
        </div>
        </div>
    );
};

export default Random;