import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setmode] = useState("light");
  const[tmode,setTmode] = useState("light");
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  const togglemode = (umode) =>{
    if(tmode!=='purple' && umode==="purple"){
      setmode('dark');
      setTmode('purple');
      document.body.style.backgroundColor = '#4c376a';
      document.getElementById("mybox").style.backgroundColor = '#674888';
      showAlert("Purple Dark Mode has been Enabled","success");
    }
    else if(tmode!=='blue' && umode==="blue"){
      setmode('dark');
      setTmode('blue');
      document.body.style.backgroundColor = 'rgb(15 15 82)';
      document.getElementById("mybox").style.backgroundColor = 'rgb(32 31 104)';
      showAlert("Blue Dark Mode has been Enabled","success");
    }
    else if(tmode!=='green' && umode==="green"){
      setmode('dark');
      setTmode('green');
      document.body.style.backgroundColor = 'rgb(15, 87, 15)';
      document.getElementById("mybox").style.backgroundColor = '#227636';
      showAlert("Green Dark Mode has been Enabled","success");
    }
    else{
      setmode('light');
      setTmode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById("mybox").style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  }
 
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="about" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />   
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
