import React from 'react';
import CaloriesCalculator from './calories';
import BmiCalculator from './bmi';
import { Route, Switch} from 'react-router-dom';
import IdealWeightCalculator from './idealWeight';
import PaymentCalculator from './payment';
import TaxCalculator from './tax';
import PercentageCalculator from './per';
import AverageCalculator from './average';
import GPA from './gpa';
import Random from './random';
import Navbar from './navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={CaloriesCalculator} />
      <Route exact path="/calories" component={CaloriesCalculator} />
      <Route exact path="/bmi" component={BmiCalculator} />
      <Route exact path="/ideal-weight" component={IdealWeightCalculator} />
      <Route exact path="/payment" component={PaymentCalculator} />
      <Route exact path="/tax" component={TaxCalculator} />
      <Route exact path="/percentage" component={PercentageCalculator} />
      <Route exact path="/average" component={AverageCalculator} />
      <Route exact path="/random" component={Random} />
      <Route exact path="/gpa" component={GPA} />
      </Switch>
    </div>
  );
}

export default App;
