import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './main.css';
import Navbar from './navbar';

function BmiCalculator() {
  const [age, setAge] = useForm("");
  const [height, setHeight] = useForm("");
  const [weight, setWeight] = useForm("");
  let bmi;

  const [result, setResult] = useState(0);

  function getResult(e) {
    e.preventDefault()
    bmi = weight / (height / 100 * height / 100);
    setResult(bmi)
  }
  return (
    <>
      <Navbar />
      <div className="root">
        <h1 className="mb-4">BMI Calculator</h1>
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

            <button className="button mb-3">Calculat</button>
          </form>
          {
            result > 0 && (
              <div className="result">
                <ul className="list-group ml-2">
                  <li className="list-group-item"> <span> <strong>BMI =</strong> </span> {`${result.toPrecision(3)} kg/m^2 `}</li>
                </ul>
              </div>
            )}
        </div>

        <div style={{ fontSize: 18, width: "75%" }}>
          <h5>BMI</h5>
          <p id="p">BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that is used by the calculator.

          </p>

          <h5>BMI table for adults</h5>
          <p>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 18 or older.</p>

          <table className="bmi-tabel" border="">
            <tr>
              <th class="header">Category</th>
              <th class="header">BMI range - kg/m2</th>

            </tr>
            <tr>
              <td class="td">Severe Thinness</td>
              <td class="td">	{`< 16`}</td>

            </tr>
            <tr>
              <td class="td">Moderate Thinness</td>
              <td class="td">	16 - 17</td>
            </tr>
            <tr>
              <td class="td">Mild Thinness</td>
              <td class="td">17 - 18.5</td>
            </tr>
            <tr>
              <td class="td">Normal</td>
              <td class="td">18.5 - 25</td>
            </tr>
            <tr>
              <td class="td">Overweight</td>
              <td class="td">	25 - 30</td>
            </tr>
            <tr>
              <td class="td">Obese Class I</td>
              <td class="td">30 - 35</td>
            </tr>
            <tr>
              <td class="td">Obese Class II</td>
              <td class="td">35 - 40</td>
            </tr>
            <tr>
              <td class="td">Obese Class III</td>
              <td class="td">{`> 40`}</td>
            </tr>
          </table>
          <div class="mt-4">
            <h5>BMI table for children and teens, age 2-20</h5>
            <p>The Centers for Disease Control and Prevention (CDC) recommends BMI categorization for children and teens between age 2 and 20.</p>
            <table className="bmi-tabel" border="" >
              <tr>
                <th class="header">Category</th>
                <th class="header">Percentile Range</th>

              </tr>
              <tr>
                <td class="td">Underweight</td>
                <td class="td">{`<5%`}</td>

              </tr>
              <tr>
                <td class="td">Healthy weight</td>
                <td class="td">5% - 85%</td>
              </tr>
              <tr>
                <td class="td">At risk of overweight</td>
                <td class="td">85% - 95%</td>
              </tr>
              <tr>
                <td class="td">Overweight</td>
                <td class="td">{`>95%`}</td>
              </tr>

            </table>

          </div>


          <div class="mt-3">
            <h5>Risks associated with being overweight</h5>
            <p>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>
            <ul>
              <li>High blood pressure</li>
              <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
              <li>Type II diabetes</li>
              <li>Coronary heart disease</li>
              <li>Stroke</li>
              <li>Gallbladder disease</li>
            </ul>
          </div>

          <h5>BMI formula</h5>
          <span style={{ paddingBottom: 50 }}>BMI= weight (kg) / [height (m)]2</span>
        </div>
      </div>
    </>
  );
};

export default BmiCalculator;