import React from 'react';
import './main.css';
import Navbar from './navbar';
import useForm from './hooks/useForm';
import { useState } from 'react';

function PercentageCalculator() {
  const [perVal, setPerVal] = useForm();
  const [val, setVal] = useForm();
  const [value1, setValue1] = useForm();
  const [value2, setValue2] = useForm();
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();

  function getResult1(e) {
    e.preventDefault();
    let Result1 = (perVal / 100) * val;
    setResult1(Result1);
  }

  function getResult2(e) {
    e.preventDefault();
    let Result2 = (((Number(value1) - Number(value2)) / ((Number(value1) + Number(value2)) / 2)) * 100);
    setResult2(Result2);
  }

  return (
    <>
      <Navbar />
      <div className="root">
        <h1 className="mb-4">Percentage Calculator</h1>
        <div className="jumbotron">
          <form onSubmit={getResult1}>
            <div className="form-row">
              <div className="col-3">
                <input type="text" className="form-control" onChange={setPerVal} placeholder="%" />
              </div>
              <span>of</span>
              <div className="col-3">
                <input type="text" className="form-control" onChange={setVal} />
              </div>
              <span>=</span>
              <div className="col-3">
                <input type="text" className="form-control" onChange={setResult1} value={result1} />
              </div>
              {(perVal < 0 || isNaN(perVal)) && <p className="error" >Please enter a positive value</p>}
              {(val < 0 || isNaN(val)) && <p className="error" >Please enter a positive value</p>}
            </div>
            <button style={{ marginLeft: "0.1rem" }} className="button mt-3">Calculat</button>
          </form>
        </div>


        <h1 className="mb-4">Percentage Difference Calculator</h1>
        <div className="jumbotron">
          <form onSubmit={getResult2}>
            <div className="form-group row">
              <label htmlFor="input1" className="col-sm-2 col-form-label">Value 1</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" name="Value 1" onChange={setValue1} id="input1" />
                {(value1 < 0 || isNaN(value1)) && <p className="error" >Please enter a positive value</p>}
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="input2" className="col-sm-2 col-form-label">Value 2</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" name="value 2" onChange={setValue2} id="input2" />
                {(value2 < 0 || isNaN(value2)) && <p className="error" >Please enter a positive value</p>}
              </div>
            </div>

            <button className="button mb-3">Calculat</button>
          </form>
          {result2 > 0 && (
            <div className="result">
              <ul class="list-group ">
                <li class="list-group-item"><strong> Result: </strong> <span> {result2} % </span></li>
                <li class="list-group-item"><strong> Difference of </strong> {value1} and {value2} are: <span> {result2} % </span></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PercentageCalculator;