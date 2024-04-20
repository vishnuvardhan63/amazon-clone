import React, { useEffect, useReducer } from 'react';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase';
// import { initialState, reducer } from './components/Reducer';

// export const stateContext=React.createContext()
function App() {
  const[{basket},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('The User is >>>',authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })

  },[])
  return (
    <div className="app">
      {/* <stateContext.Provider value={useReducer(reducer,initialState)} > */}
      
      <Routes>
        <Route path='/' element={<><Header/><Home /></>} />
        <Route path='/checkout' element={<><Header/><Checkout /></>} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* </stateContext.Provider> */}
    </div>
  );
}

export default App;
