import logo from './logo.svg';
import './App.css';
import './index.css';
import {Landing} from './component/landing';
import React from 'react';
import useNavigate from 'react-router-dom';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Landing/>

      <button className="border-2" onClick={() => navigate('/myprofile')}>Go to my profile hehehe</button>
    </div>
    
  );
}

export default App;
