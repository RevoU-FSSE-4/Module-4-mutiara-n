import React from 'react';
import logo from './logo.svg';
import './App.css';
import MultiStepForm from './Components/MultiStepForm';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import RegisterComponent from './Components/RegisterComponent';
import Home from './Components/HomeComponent';
import LoginComponent from './Components/LoginComponent';
import CategoryComponent from './Components/CategoryComponent';
import PrivateRoute from './Utils/PrivateRoute';

const NotFound = () => {
  return (
    <>
    <h1>Not Found</h1>
    </> 
  )
}

export default function App() {
  return (
    <header className="App-header">
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/' element={<PrivateRoute/>}>
              <Route path='/dashboard' element={<CategoryComponent />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </header>
  );
}