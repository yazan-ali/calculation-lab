import React from 'react';
import "./App.css"
import CaloriesCalculator from './calories';
import BmiCalculator from './bmi';
import { Route, Switch } from 'react-router-dom';
import IdealWeightCalculator from './idealWeight';
import PaymentCalculator from './payment';
import TaxCalculator from './tax';
import PercentageCalculator from './per';
import AverageCalculator from './average';
import GPA from './gpa';
import Random from './random';
import NewYear from './newYear';
import LandingPage from './landingPage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/calories" component={CaloriesCalculator} />
        <Route exact path="/bmi" component={BmiCalculator} />
        <Route exact path="/ideal-weight" component={IdealWeightCalculator} />
        <Route exact path="/payment" component={PaymentCalculator} />
        <Route exact path="/tax" component={TaxCalculator} />
        <Route exact path="/percentage" component={PercentageCalculator} />
        <Route exact path="/average" component={AverageCalculator} />
        <Route exact path="/random" component={Random} />
        <Route exact path="/gpa" component={GPA} />
        <Route exact path="/newYear" component={NewYear} />
      </Switch>
    </div>
  );
}

export default App;
