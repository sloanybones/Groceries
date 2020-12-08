import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Groceries from "./Groceries";
import List from './List';
import { render } from '@testing-library/react';
import GroceryForm from './GroceryForm'
function App() {
  return (
    <div className="App">
     <Groceries />
        </div>
  );

}
export default App;
