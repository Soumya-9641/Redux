
import './App.css';
//import{useState} from "react"
import React from "react";
import {useSelector,useDispatch} from "react-redux";

import {incNumber,decNumber} from "./actions/index";
function App() {
  const mystate = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className="App">
      <div className='container'>
              <h1 className='container_h1'>Increment and decrement</h1>
              <h4>using react and redux</h4>
              <div className='container_box'>
                  <span onClick={()=> dispatch(decNumber(5))} className='decrement' title='decrement'>-</span>
                    <input  name='quantity' className='container_quantity' value={mystate} />
                  <span onClick={()=> dispatch(incNumber(5))} className='increment' title='increement'>+</span>
              </div>
      </div>
    </div>
    </>
  );
}

export default App;
