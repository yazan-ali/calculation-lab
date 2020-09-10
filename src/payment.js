import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './root.css';

function PaymentCalculator(){
  const [loanAmount, setLoanAmount] = useForm("");
  const [loanTerm, setLoanTerm] = useForm(""); 
  const [interestRate, setInterestRate] = useForm("");
  let pmt; 
  let rate = interestRate /1200;
  let LoanTerm = loanTerm * 12

  const [result, setResult] = useState(0);

  function Rate(n){	
    var I=rate + 1;
    var rate2=1;	
    for(var i=1; i<=n; i++){
    rate2=rate2*I;
    }
    return rate2;
    }

  function getResult(e){
    e.preventDefault()
    pmt = (loanAmount * rate * Rate(LoanTerm)) / (Rate(LoanTerm) -1);
    setResult(pmt)
}
    return(
       <div className="root">
         <h1 className="mb-4">Payment Calculator</h1>
        <div className="jumbotron">
        <form onSubmit={getResult}>
            <div className="form-group row">
              <label htmlFor="input1" className="col-sm-3 col-form-label">Loan Amount</label>
              <div className="col-sm-6">
              <input type="text" className="form-control" name="loan amount" value={loanAmount} onChange={setLoanAmount} id="input1"/>
              { (loanAmount < 0 || isNaN(loanAmount)) && <p className="error" >Please enter a positive value</p> }
              </div>
            </div>

            <div className="form-group row">
             <label htmlFor="input3" className="col-sm-3 col-form-label">Loan Term</label>
             <div className="col-sm-6">
             <input type="text" className="form-control" name="loan term" value={loanTerm} onChange={setLoanTerm} placeholder="years" id="input3"/>
             { (loanTerm < 0 || isNaN(loanTerm)) && <p className="error" >Please enter a positive value</p> }
            </div>
           </div>

           <div className="form-group row">
             <label htmlFor="input4" className="col-sm-3 col-form-label">Interest Rate</label>
             <div className="col-sm-6">
             <input type="text" className="form-control" name="interest rate" value={interestRate} onChange={setInterestRate} placeholder="%" id="input4"/>
             { (interestRate < 0 || isNaN(interestRate)) && <p className="error" >Please enter a positive value</p> }
            </div>
           </div>
          
           <button className="button2 mb-3">Calculat</button>
           </form>
           { result > 0 && (
           <div className="result2">
           <ul className="list-group ml-2">
             <li className="list-group-item"> <strong> <span>Monthly Payment:</span> </strong> {result.toPrecision(6)} </li>
             <li className="list-group-item"> <strong> <span>Time Required to Clear Debt: </span></strong>  {LoanTerm /12 } years</li>
             <li className="list-group-item"> <strong> <span> Total of {LoanTerm} payment </span></strong>  {(result *LoanTerm).toPrecision(9)}</li>
             <li className="list-group-item"> <strong> <span> Total Interest: </span></strong>  {((result*LoanTerm)-loanAmount).toPrecision(8)}</li>
           </ul>	
           </div>
           )}
        </div>
        </div>
    );
};

export default PaymentCalculator;