import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import { useState } from 'react';
import PatientManagement from './components/PatientManagement/PaitientManagement';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
