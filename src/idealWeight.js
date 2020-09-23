import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './main.css';

function IdealWeightCalculator(){
  const [age, setAge] = useForm("");
  // const [units, setUnits] = useForm("metric units"); 
  const [gender, setGender] = useForm("");  
  const [height, setHeight] = useForm(""); 
  let idelWeight; 

  const [result, setResult] = useState(0);

  function getResult(e){
    e.preventDefault();
    if(gender === "male"){
        idelWeight = 50 + (0.91 * (height - 152.4));
      } else if(gender === "female"){
        idelWeight = 45.5 + (0.91 * (height - 152.4));
      }
    setResult(idelWeight);
}
    return(
       <div className="root">
         <h1 className="mb-4">Idel Weight Calculator</h1>
        <div className="jumbotron">
        <form onSubmit={getResult}>
        {/* <div className="form-group row">
              <label htmlFor="units" className="col-sm-2 col-form-label">Units</label>
              <div className="ml-3" id="units">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="units" id="inlineRadio1" value="metric units" onChange={setUnits} />
              <label className="form-check-label" htmlFor="inlineRadio1">Metric Units</label>
            </div>
            <div className="form-check form-check-inline">
             <input className="form-check-input" type="radio" name="units" id="inlineRadio2" value="us units" onChange={setUnits} />
             <label className="form-check-label" htmlFor="inlineRadio2">US Units</label>
            </div>
            </div>
          </div> */}

            <div className="form-group row">
              <label htmlFor="input1" className="col-sm-2 col-form-label">Age</label>
              <div className="col-sm-6">
              <input type="text" className="form-control" name="age" value={age} onChange={setAge} id="input1"/>
              { (age < 0 || isNaN(age)) && <p className="error" >Please enter a positive value</p> }
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
              <div className="ml-3" id="gender">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="male" onChange={setGender} />
              <label className="form-check-label" htmlFor="inlineRadio3">Male</label>
            </div>
            <div className="form-check form-check-inline">
             <input className="form-check-input" type="radio" name="gender" id="inlineRadio4" value="female" onChange={setGender} />
             <label className="form-check-label" htmlFor="inlineRadio4">Female</label>
            </div>
            </div>
            </div>

            <div className="form-group row">
             <label htmlFor="input3" className="col-sm-2 col-form-label">Height</label>
             <div className="col-sm-6">
             <input type="text" className="form-control" name="height" value={height} onChange={setHeight} placeholder="cm" id="input3"/>
             { (height < 0 || isNaN(height)) && <p className="error" >Please enter a positive value</p> }
            </div>
           </div>

           <button className="button mb-3">Calculat</button>
           </form>
           { result > 0 && (
           <div className="result">
           <ul className="list-group ml-2">
             <li className="list-group-item"><strong> Ideal Weight =</strong> {`${result.toPrecision(3)} kgs`}</li>
           </ul>	
           </div>
           )}
        </div>
        </div>
    );
};

export default IdealWeightCalculator;