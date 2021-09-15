import React,{useReducer} from 'react';
import reducer, { initialState } from "./reducers/index.js";
import {applyNumber,changeOperation,clearDisplay, m_c, m_plus,m_r} from './actions/index.js';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {


  const [state, dispatch] = useReducer(reducer,initialState)

  const handleClear =() =>{
    dispatch(clearDisplay());
    console.log('displayyy',dispatch(clearDisplay()))
  }

  const handleMPlus =() =>{dispatch(m_plus())}
  const handleMr =() =>{dispatch(m_r())}
  const handleMc =() =>{dispatch(m_c())}

  const handleSum =() =>{dispatch(changeOperation("+"))}
  const handleSubst =() =>{ dispatch(changeOperation("-"))}
  const handleMult =() => {dispatch(changeOperation("*"))}

  const handleClick =()  =>{dispatch(applyNumber(1))}
  const handleClick2 =() =>{dispatch(applyNumber(2))}
  const handleClick3 =() =>{dispatch(applyNumber(3))}
  const handleClick4 =() =>{dispatch(applyNumber(4))}
  const handleClick5 =() =>{dispatch(applyNumber(5))}
  const handleClick6 =() =>{dispatch(applyNumber(6))}
  const handleClick7 =() =>{dispatch(applyNumber(7))}
  const handleClick8 =() =>{dispatch(applyNumber(8))}
  const handleClick9 =() =>{dispatch(applyNumber(9))}


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleMPlus} value={"M+"}/>
              <CalcButton  onClick={handleMr} value={"MR"}/>
              <CalcButton  onClick={handleMc} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={1}/>
              <CalcButton onClick={handleClick2} value={2}/>
              <CalcButton onClick={handleClick3} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick4} value={4}/>
              <CalcButton onClick={handleClick5} value={5}/>
              <CalcButton onClick={handleClick6} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick7} value={7}/>
              <CalcButton onClick={handleClick8} value={8}/>
              <CalcButton onClick={handleClick9} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleSum} value={"+"}/>
              <CalcButton onClick={handleMult} value={"*"}/>
              <CalcButton onClick={handleSubst} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onclick ={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
