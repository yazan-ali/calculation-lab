import React from 'react';
import { useState } from 'react';
import './main.css';
import Navbar from './navbar';
import useForm from './hooks/useForm';

function GPA() {
  const [inputs, setInput] = useState({
    input0: 0,
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    input6: 0,
    input7: 0,
    input8: 0,
    input9: 0,
    input10: 0,
    input11: 0,
    input12: 0,
    input13: 0,
    input14: 0,
  });

  const [grades, setGrades] = useState({
    grade0: 0,
    grade1: 0,
    grade2: 0,
    grade3: 0,
    grade4: 0,
    grade5: 0,
    grade6: 0,
    grade7: 0,
    grade8: 0,
    grade9: 0,
    grade10: 0,
    grade11: 0,
    grade12: 0,
    grade13: 0,
    grade14: 0,
  });

  const [allSelect, setSelect] = useState({
    select0: 0,
    select1: 0,
    select2: 0,
    select3: 0,
    select4: 0,
    select5: 0,
    select6: 0,
    select7: 0,
    select8: 0,
    select9: 0,
    select10: 0,
    select11: 0,
    select12: 0,
    select13: 0,
    select14: 0,
  });

  const [format, setFormat] = useForm("letter");

  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);

  const handleInputChange = e => {
    setInput({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleGradeChange = e => {
    setGrades({ ...grades, [e.target.name]: e.target.value })
  }

  const handleSelectChange = e => {
    setSelect({ ...allSelect, [e.target.name]: e.target.value })
  }
  function getGrade(select) {
    if (select === "A+") {
      return 4.3;
    }
    else if (select === "A") {
      return 4;
    }
    else if (select === "A-") {
      return 3.7;
    }
    else if (select === "B+") {
      return 3.3;
    }
    else if (select === "B") {
      return 3;
    }
    else if (select === "B-") {
      return 2.7;
    }
    else if (select === "C+") {
      return 2.3;
    }
    else if (select === "C") {
      return 2;
    }
    else if (select === "C-") {
      return 1.7;
    }
    else if (select === "D+") {
      return 1.3;
    }
    else if (select === "D") {
      return 1;
    }
    else if (select === "D-") {
      return 0.7;
    }
    else if (select === "F" || select === "-") {
      return 0;
    }
  }

  function getResult(e) {
    e.preventDefault();
    if (format === "letter") {
      let grade0 = Number(inputs.input0) * getGrade(allSelect.select0) || 0;
      let grade1 = Number(inputs.input1) * getGrade(allSelect.select1) || 0;
      let grade2 = Number(inputs.input2) * getGrade(allSelect.select2) || 0;
      let grade3 = Number(inputs.input3) * getGrade(allSelect.select3) || 0;
      let grade4 = Number(inputs.input4) * getGrade(allSelect.select4) || 0;
      let grade5 = Number(inputs.input5) * getGrade(allSelect.select5) || 0;
      let grade6 = Number(inputs.input6) * getGrade(allSelect.select6) || 0;
      let grade7 = Number(inputs.input7) * getGrade(allSelect.select7) || 0;
      let grade8 = Number(inputs.input8) * getGrade(allSelect.select8) || 0;
      let grade9 = Number(inputs.input9) * getGrade(allSelect.select9) || 0;
      let grade10 = Number(inputs.input10) * getGrade(allSelect.select10) || 0;
      let grade11 = Number(inputs.input11) * getGrade(allSelect.select11) || 0;
      let grade12 = Number(inputs.input12) * getGrade(allSelect.select12) || 0;
      let grade13 = Number(inputs.input13) * getGrade(allSelect.select13) || 0;
      let grade14 = Number(inputs.input14) * getGrade(allSelect.select14) || 0;

      let sumOfGrades = grade0 + grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8 + grade9 + grade10 + grade11 + grade12 + grade13 + grade14;
      let sumOfInputs = Number(inputs.input0) + Number(inputs.input1) + Number(inputs.input2) + Number(inputs.input3) + Number(inputs.input4) + Number(inputs.input5) + Number(inputs.input6) + Number(inputs.input7) + Number(inputs.input8) + Number(inputs.input9) + Number(inputs.input10) + Number(inputs.input11) + Number(inputs.input12) + Number(inputs.input13) + Number(inputs.input14);
      let gpa = sumOfGrades / sumOfInputs;
      setResult1(gpa);
    }
    else if (format === "percentage") {
      let grade0 = Number(inputs.input0) * Number(grades.grade0) || 0;
      let grade1 = Number(inputs.input1) * Number(grades.grade1) || 0;
      let grade2 = Number(inputs.input2) * Number(grades.grade2) || 0;
      let grade3 = Number(inputs.input3) * Number(grades.grade3) || 0;
      let grade4 = Number(inputs.input4) * Number(grades.grade4) || 0;
      let grade5 = Number(inputs.input5) * Number(grades.grade5) || 0;
      let grade6 = Number(inputs.input6) * Number(grades.grade6) || 0;
      let grade7 = Number(inputs.input7) * Number(grades.grade7) || 0;
      let grade8 = Number(inputs.input8) * Number(grades.grade8) || 0;
      let grade9 = Number(inputs.input9) * Number(grades.grade9) || 0;
      let grade10 = Number(inputs.input10) * Number(grades.grade10) || 0;
      let grade11 = Number(inputs.input11) * Number(grades.grade11) || 0;
      let grade12 = Number(inputs.input12) * Number(grades.grade12) || 0;
      let grade13 = Number(inputs.input13) * Number(grades.grade13) || 0;
      let grade14 = Number(inputs.input14) * Number(grades.grade14) || 0;

      let sumOfGrades = grade0 + grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8 + grade9 + grade10 + grade11 + grade12 + grade13 + grade14;
      let sumOfInputs = Number(inputs.input0) + Number(inputs.input1) + Number(inputs.input2) + Number(inputs.input3) + Number(inputs.input4) + Number(inputs.input5) + Number(inputs.input6) + Number(inputs.input7) + Number(inputs.input8) + Number(inputs.input9) + Number(inputs.input10) + Number(inputs.input11) + Number(inputs.input12) + Number(inputs.input13) + Number(inputs.input14);
      let gpa = (sumOfGrades / sumOfInputs);
      setResult2(gpa);
    }
  }

  let i = [1, 2, 3, 5, 4, 8, 5, 84, 84, 848, 484, 8484, 5, 8548, 484];
  return (
    <>
      <Navbar />
      <div className="root">
        <div className="jumbotron">
          <form onSubmit={getResult}>
            <div className="gpaHeader">
              <div className="form-group row">
                <label htmlFor="format" className="col-1-form-label">Grade Format</label>
                <div className="ml-3" id="format">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="format" id="inlineRadio1" value="letter" onChange={setFormat} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Letter</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="format" id="inlineRadio2" value="percentage" onChange={setFormat} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Percentage</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="gpaForm">
              <div className="row">
                <label className="col-4" htmlFor="cred">Credits</label>
                <label className="col-4" htmlFor="grade">Grade</label>
              </div>
              {i.map((i, idx) => (
                <div class="form-row">
                  <div class="col col-md-4 mb-3">
                    <input type="text" class="form-control" name={`input${idx}`} onChange={handleInputChange} />
                  </div>
                  { format === "percentage" ?
                    <div class="col col-md-4 mb-3">
                      <input type="text" class="form-control" name={`grade${idx}`} onChange={handleGradeChange} />
                    </div> :
                    <div class="col col-md-4 mb-3">
                      <select onChange={handleSelectChange} name={`select${idx}`} className="form-control">
                        <option value="-">-</option>
                        <option value="A+" >A+</option>
                        <option value="A" >A</option>
                        <option value="A-" >A-</option>
                        <option value="B+" >B+</option>
                        <option value="B" >B</option>
                        <option value="B-" >B-</option>
                        <option value="C+" >C+</option>
                        <option value="C" >C</option>
                        <option value="C-" >C-</option>
                        <option value="D+" >D+</option>
                        <option value="D" >D</option>
                        <option value="D-" >D-</option>
                        <option value="F" >F</option>
                      </select>
                    </div>
                  }
                </div>
              ))
              }
            </div>
            <button className="col-3 gpaBtn" type="submit">Calculate</button>
          </form>
          {result1 > 0 && format === "letter" && (
            <div className="result mt-3">
              <ul className="list-group ml-md-5">
                <li className="list-group-item"> <strong>GPA = {result1.toPrecision(3)} </strong> </li>
              </ul>
            </div>
          )}
          {result2 > 0 && format === "percentage" && (
            <div className="result mt-5">
              <ul className="list-group ml-md-5">
                <li className="list-group-item"> <strong>GPA = {result2.toPrecision(3)} </strong> </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GPA;