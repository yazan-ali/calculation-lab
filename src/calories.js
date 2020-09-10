import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './calories.css';

function CaloriesCalculator(){
  const [age, setAge] = useForm(""); 
  const [height, setHeight] = useForm(""); 
  const [weight, setWeight] = useForm(""); 
  // const [units, setUnits] = useForm("metric units"); 
  const [gender, setGender] = useForm(""); 
  const [activity, setActivity] = useForm(""); 
  let bmr;
  const [result, setResult] = useState(0);

  function getActivity(){
    if(activity === "bmr"){
      return 1;
    } else if(activity === "sedentary"){
      return 1.2;
    } else if(activity === "light"){
      return 1.375;
    } else if(activity === "moderate"){
      return 1.465;
    } else if(activity === "active"){
      return 1.55;
    } else if(activity === "very active"){
      return 1.725;
    } else if(activity === "extra active"){
      return 1.9;
    }
  }
  function getResult(e){
    e.preventDefault();
  if(gender === "male"){
    bmr = Math.round((10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5) * getActivity());
  } else if(gender === "female"){
    bmr = Math.round((10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) -161) * getActivity());
  }
  setResult(bmr)
}
    return(
       <div className="root">
         <h1 className="mb-4">Calorie Calculator</h1>
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

           <div className="form-group row">
             <label htmlFor="input4" className="col-sm-2 col-form-label">Weight</label>
             <div className="col-sm-6">
             <input type="text" className="form-control" name="weight" value={weight} onChange={setWeight} placeholder="kg" id="input4"/>
             { (weight < 0 || isNaN(weight)) && <p className="error" >Please enter a positive value</p> }
            </div>
           </div>
           <div className="form-group row">
           <label htmlFor="select" className="col-sm-2 col-form-label" id="select">Activity</label>
           <div className="col-sm-6">
           <select value={activity} onChange={setActivity} className="form-control">
             <option>Select Activity</option>
             <option value="bmr" >Basal Metabolic Rate (BMR)</option>
             <option value="sedentary">Sedentary: little or no exercise</option>
             <option value="light">Light: exercise 1-3 times/week</option>
             <option value="moderate">Moderate: exercise 4-5 times/week</option>
             <option value="active">Active: daily exercise or intense exercise 3-4 times/week</option>
             <option value="very active">Very Active: intense exercise 6-7 times/week</option>
             <option value="extra active">Extra Active: Very intense exercise daily, or physical job</option>
           </select>
           </div>
           </div>
           {/* <div>
           <ul >
	           <li><strong>Exercise:</strong> 15-30 minutes of elevated heart rate activity.</li>
           	<li><strong>Intense exercise:</strong> 45-120 minutes of elevated heart rate activity.</li>
	           <li><strong>Very intense exercise:</strong> 2+ hours of elevated heart rate activity.</li>
           </ul>
           </div> */}
           <button className="button mb-3">Calculat</button>
           </form>
           {
             result > 0 &&(
           <div className="result">
           <ul className="list-group ml-2">
             <li className="list-group-item">Maintain weight: {result} </li>
             <li className="list-group-item">Mild weight loss:<span className="spans">0.25 kg/week</span> {result - 250} </li>
             <li className="list-group-item">Weight loss:<span className="spans">0.5 kg/week</span> {result - 500} </li>
             <li className="list-group-item">Extreme weight loss:<span className="spans">1 kg/week</span> {result - 1000} </li>
           </ul>	
           </div>
             )}
        </div>
        </div>
    );
};

export default CaloriesCalculator;