import React from 'react';
import { useState } from 'react';
import useForm from './hooks/useForm';
import './calories.css';

function TaxCalculator(){
  const [before, setBefore] = useForm(0);
  const [after, setAfter] = useForm(0); 
  const [tax, setTax] = useForm(0);

  const [result, setResult] = useState(0);

  function getResult(e){
    e.preventDefault()
    if(before > 0 && tax >=0 && (after === 0 || after === "")){
        let taxRate = Number(before * (tax / 100));
        let afterRes = Number(before) + taxRate;
        setResult([before, tax, taxRate.toPrecision(5), afterRes]);
        console.log(taxRate)
        }
        else if(before > 0 && after > 0 && (tax === 0 || tax === "")){
        let taxVal1 = Number(after) - Number(before);	
        let taxRes = ((Number(taxVal1) / Number(before)) * 100);
        setResult([before, taxRes, taxVal1, after]);
        }
        else if(after > 0 && tax > 0 && (before === 0 || before === "" )){
        let beforeRes = (Number(after)/(1 + (Number(tax) / 100))).toPrecision(6);
        let taxVal2 = (Number(after) - beforeRes).toPrecision(3);
        setResult([beforeRes,tax,taxVal2,after]);
        }
}
    return(
       <div className="root">
         <h1 className="mb-4">Sales Tax Calculator</h1>
        <div className="jumbotron">
        <form onSubmit={getResult}>
            <div className="form-group row">
              <label htmlFor="input1" className="col-sm-3 col-form-label">Before Tax Price</label>
              <div className="col-sm-6">
              <input type="text" className="form-control" name="Before Tax Price" onChange={setBefore} id="input1"/>
              { (before < 0 || isNaN(before)) && <p className="error" >Please enter a positive value</p> }
              </div>
            </div>

            <div className="form-group row">
             <label htmlFor="input3" className="col-sm-3 col-form-label">Sales Tax Rate</label>
             <div className="col-sm-6">
             <input type="text" className="form-control" name="Tax"  onChange={setTax} placeholder="%" id="input3"/>
             { (tax < 0 || isNaN(tax)) && <p className="error" >Please enter a positive value</p> }
            </div>
           </div>

           <div className="form-group row">
             <label htmlFor="input4" className="col-sm-3 col-form-label">After Tax Price</label>
             <div className="col-sm-6">
             <input type="text" className="form-control" name="After Tax Price" onChange={setAfter} id="input4"/>
             { (after < 0 || isNaN(after)) && <p className="error" >Please enter a positive value</p> }
            </div>
           </div>
          
           <button className="button mb-3">Calculat</button>
           </form>
           { result.length > 0 && (
           <div className="result">
           <ul class="list-group ">
             <li class="list-group-item"><strong> Before Tax Price: </strong> $<span> {result[0]} </span></li>
             <li class="list-group-item"><strong> Sale Tax:</strong> <span> {result[1]} </span>% or $<span> {result[2]} </span>  </li>
             <li class="list-group-item"><strong> After Tax Price:</strong> $<span> {result[3]} </span>  </li>
           </ul> 	
           </div>
           )}
        </div>
        </div>
    );
};

export default TaxCalculator;