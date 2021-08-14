import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './main.css';
import Navbar from './navbar';

function IdealWeightCalculator() {
  const [age, setAge] = useForm("");
  // const [units, setUnits] = useForm("metric units"); 
  const [gender, setGender] = useForm("");
  const [height, setHeight] = useForm("");
  let idelWeight;

  const [result, setResult] = useState(0);

  function getResult(e) {
    e.preventDefault();
    if (gender === "male") {
      idelWeight = 50 + (0.91 * (height - 152.4));
    } else if (gender === "female") {
      idelWeight = 45.5 + (0.91 * (height - 152.4));
    }
    setResult(idelWeight);
  }
  return (
    <>
      <Navbar />
      <div className="root">
        <h1 className="mb-4">Idel Weight Calculator</h1>
        <p style={{ fontSize: 18, width: "74%" }}>
          The Ideal Weight Calculator computes ideal bodyweight (IBW) ranges based on height, gender, and age. The idea of finding the IBW using a formula has been sought after by many experts for a long time. Currently, there persist several popular formulas, and our Ideal Weight Calculator provides their results for side-to-side comparisons.
        </p>
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

            <button className="button mb-3">Calculat</button>
          </form>
          {result > 0 && (
            <div className="result">
              <ul className="list-group ml-2">
                <li className="list-group-item"><strong> Ideal Weight =</strong> {`${result.toPrecision(3)} kgs`}</li>
              </ul>
            </div>
          )}
        </div>
        <h4>How Much Should I Weigh?</h4>
        <p style={{ fontSize: 18, width: "74%" }}>home / fitness & health / ideal weight calculator Ideal Weight Calculator The Ideal Weight Calculator computes ideal bodyweight (IBW) ranges based on height, gender, and age. The idea of finding the IBW using a formula has been sought after by many experts for a long time. Currently, there persist several popular formulas, and our Ideal Weight Calculator provides their results for side-to-side comparisons. US Units Metric Units Other Units Age 25 ages 2 - 80 Gender Height 180 cm Calculate Result The ideal weight based on popular formulas: Formula Ideal Weight Robinson (1983) 72.6 kgs Miller (1983) 71.5 kgs Devine (1974) 75.0 kgs Hamwi (1964) 77.3 kgs Healthy BMI Range 59.9 - 81.0 kgs Related BMI Calculator | Body Fat Calculator | Calorie Calculator How Much Should I Weigh? Most everyone has at some point tried to lose weight, or at least known somebody who has. This is largely due to the perception of an "ideal" body weight, which is often based on what we see promoted through various media such as social media, TV, movies, magazines, etc. Although ideal body weight (IBW) today is sometimes based on perceived visual appeal, IBW was actually introduced to estimate dosages for medical use, and the formulas that calculate it are not at all related to how a person looks at a given weight. It has since been determined that the metabolism of certain drugs is more based on IBW than it is total body weight. Today, IBW is also used widely throughout sports, since many sports classify people based on their body weight. Note that IBW is not a perfect measurement. It does not consider the percentages of body fat and muscle in a person's body. This means that it is possible for highly fit, healthy athletes to be considered overweight based on their IBW. This is why IBW should be considered with the perspective that it is an imperfect measure and not necessarily indicative of health, or a weight that a person should necessarily strive toward; it is possible to be over or under your "IBW" and be perfectly healthy. How much a person should weigh is not an exact science. It is highly dependent on each individual. Thus far, there is no measure, be it IBW, body mass index (BMI), or any other that can definitively state how much a person should weigh to be healthy. They are only references, and it's more important to adhere to making healthy life choices such as regular exercise, eating a variety of unprocessed foods, getting enough sleep, etc. than it is to chase a specific weight based on a generalized formula. That being said, many factors can affect the ideal weight; the major factors are listed below. Other factors include health conditions, fat distribution, progeny, etc.</p>
        <h4>Age</h4>
        <p style={{ fontSize: 18, width: "74%" }}>
          In theory, age shouldn't be a large determinant of a IBW past the ages of 14-15 for girls and 16-17 for boys, after which most people stop growing. It is actually expected that human males and females to lose 1.5 and 2 inches in height respectively by age 70. It is important to remember that as people age, lean muscle mass decreases and it is easier to accumulate excess body fat. This is a natural process, though it is possible to lessen the effects of aging by adopting various habits such as monitoring diet, exercise, stress, and sleep.
        </p>
        <h4>Gender</h4>
        <p style={{ fontSize: 18, width: "74%" }}>
          Generally, females weigh less than males even though they naturally have a higher percentage of body fat. This is because the male body generally has higher muscle mass, and muscle is heavier than fat. Not only that, but women generally have lower bone density. Last but not least, males tend to be taller than females.
        </p>
        <h4>Height</h4>
        <p style={{ fontSize: 18, width: "74%" }}>
          The taller the person, the more muscle mass and body fat they have, which results in more weight. A male at a similar height to a female should weigh about 10-20% heavier.
        </p>
      </div>
    </>
  );
};

export default IdealWeightCalculator;