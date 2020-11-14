import React from 'react';
import { useState } from 'react';
import AverageForm from './averageForm';
import Navbar from './navbar';

function AverageCalculator() {
  const InitValue = [90, 95, 80];
  const [value, setValue] = useState(InitValue);
  let result = 0;

  function addValue(newVal) {
    setValue([...value, newVal]);
  }

  function clear(newVal) {
    setValue([]);
  }

  value.forEach((val) => (
    result = result + val
  ));
  return (
    <>
      <Navbar />
      <div className="root">
        <h1 className="mb-4">Average Calculator</h1>
        <div className="averageComp">
          <AverageForm handleAddValue={addValue} clear={clear} />
          {
            value.map((val, i) => (
              <h4 className="avrValue">{`Value(${i + 1}): ${val}`} </h4>
            ))
          }
          {result > 0 &&
            <p className="avrResult"> <strong> Average = </strong> {(result / value.length).toPrecision(3)} </p>
          }
        </div>
      </div>
    </>
  );
};

export default AverageCalculator;