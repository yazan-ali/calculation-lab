import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './main.css';
import Navbar from './navbar';

function CaloriesCalculator() {
  const [age, setAge] = useForm("");
  const [height, setHeight] = useForm("");
  const [weight, setWeight] = useForm("");
  // const [units, setUnits] = useForm("metric units"); 
  const [gender, setGender] = useForm("");
  const [activity, setActivity] = useForm("");
  let bmr;
  const [result, setResult] = useState(0);

  function getActivity() {
    if (activity === "bmr") {
      return 1;
    } else if (activity === "sedentary") {
      return 1.2;
    } else if (activity === "light") {
      return 1.375;
    } else if (activity === "moderate") {
      return 1.465;
    } else if (activity === "active") {
      return 1.55;
    } else if (activity === "very active") {
      return 1.725;
    } else if (activity === "extra active") {
      return 1.9;
    }
  }
  function getResult(e) {
    e.preventDefault();
    if (gender === "male") {
      bmr = Math.round((10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5) * getActivity());
    } else if (gender === "female") {
      bmr = Math.round((10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161) * getActivity());
    }
    setResult(bmr)
  }
  return (
    <>
      <Navbar />
      <div className="root">
        <h1 className="mb-4">Calorie Calculator</h1>
        <p style={{ fontSize: 18, width: "74%" }}>The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight.</p>
        <div className="jumbotron">
          <form onSubmit={getResult}>

            <div className="form-group row">
              <label htmlFor="input1" className="col-sm-2 col-form-label">Age</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" name="age" value={age} onChange={setAge} id="input1" />
                {(age < 0 || isNaN(age)) && <p className="error" >Please enter a positive value</p>}
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
                <input type="text" className="form-control" name="height" value={height} onChange={setHeight} placeholder="cm" id="input3" />
                {(height < 0 || isNaN(height)) && <p className="error" >Please enter a positive value</p>}
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="input4" className="col-sm-2 col-form-label">Weight</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" name="weight" value={weight} onChange={setWeight} placeholder="kg" id="input4" />
                {(weight < 0 || isNaN(weight)) && <p className="error" >Please enter a positive value</p>}
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
            <button className="button mb-3">Calculat</button>
          </form>
          {
            result > 0 && (
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
        <p style={{ fontSize: 18, width: "74%" }}>
          This Calorie Calculator is based on several equations, and the results of the calculator are based on an estimated average. The Harris-Benedict Equation was one of the earliest equations used to calculate basal metabolic rate (BMR), which is the amount of energy expended per day at rest. It was revised in 1984 to be more accurate and was used up until 1990, when the Mifflin-St Jeor Equation was introduced. The Mifflin-St Jeor Equation also calculates BMR, and has been shown to be more accurate than the revised Harris-Benedict Equation. The Katch-McArdle Formula is slightly different in that it calculates resting daily energy expenditure (RDEE), which takes lean body mass into account, something that neither the Mifflin-St Jeor nor the Harris-Benedict Equation do. Of these equations, the Mifflin-St Jeor Equation is considered the most accurate equation for calculating BMR with the exception that the Katch-McArdle Formula can be more accurate for people who are leaner and know their body fat percentage. The three equations used by the calculator are listed below:
        </p>

        <h4>Mifflin-St Jeor Equation:</h4>
        <p style={{ fontSize: 16.5, width: "74%" }}>For men: BMR = 10W + 6.25H - 5A + 5</p>
        <p style={{ fontSize: 16.5, width: "74%" }}>For women: BMR = 10W + 6.25H - 5A - 161</p>

        <h4>Revised Harris-Benedict Equation:</h4>
        <p style={{ fontSize: 16.5, width: "74%" }}>For men: BMR = 13.397W + 4.799H - 5.677A + 88.362</p>
        <p style={{ fontSize: 16.5, width: "74%" }}>For women: BMR = 9.247W + 3.098H - 4.330A + 447.593</p>

        <h4>Katch-McArdle Formula:</h4>
        <p style={{ fontSize: 16.5, width: "74%" }}>BMR = 370 + 21.6(1 - F)W</p>
        <span>Where:</span>
        <ul>
          <li style={{ fontSize: 18.5 }}>W is body weight in kg</li>
          <li style={{ fontSize: 18.5 }}>H is body height in cm</li>
          <li style={{ fontSize: 18.5 }}>A is age</li>
          <li style={{ fontSize: 18.5 }}>F is body fat in percentage</li>
        </ul>
      </div>
    </>
  );
};

export default CaloriesCalculator;