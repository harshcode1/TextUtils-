import './App.css';
import About from './component/About';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Always remembr when you made such usestates in App.js then use then in props and give it to them in components or with components
  const [Mode, setMode] = useState('light');
  const [alt, setAlt] = useState(null);
  // Here we set the Deafult Value to Null

  const showAlert = (message, type) => {
    setAlt({
      msg: message,
      type: type
    })
    // Now it is an object
    setTimeout(() => {
      setAlt(null)
    }, 1500);
  }

  const removeToggle = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggle = (cls) => {
    removeToggle();
    
    if (Mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been Disabled", "SUCCESS")
      // If in a case if i ever want to change the other stuff like page title then i can change it easily by DOM
      document.title = 'TextUtils - Done Bro'
    } else {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("dark Mode has been Enabled", "SUCCESS")
    }
    document.body.classList.add('bg-'+cls)
  }


  // NOW HERE IT'S TIME TO DO SOME EXPERIMENTS AND LET'S DO IT

  //=>RED MODE
  const redMode = () => {
    if (Mode === 'red') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Red Mode Disabled", "success")
    } else {
      setMode('red')
      document.body.style.backgroundColor = 'red'
      showAlert("Sucessfully converted to RED Mode", "success")
    }
  }

  //=>green MODE
  const greenMode = () => {
    if (Mode === 'green') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Green Mode Disabled", "success")
    } else {
      setMode('green')
      document.body.style.backgroundColor = 'green'
      showAlert("Sucessfully converted to Green Mode", "success")
    }
  }

  //=>green MODE
  const blueMode = () => {
    if (Mode === 'blue') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Blue Mode Disabled", "success")
    } else {
      setMode('blue')
      document.body.style.backgroundColor = 'blue'
      showAlert("Sucessfully converted to blue Mode", "success")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" links="Link" mode={Mode} toggle={toggle} redMode={redMode} greenMode={greenMode} blueMode={blueMode} />
        <Alert alert={alt} />
        <div className="container my-3">

          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Text" mode={Mode} toggle={toggle} showAlert={showAlert} redMode={redMode} greenMode={greenMode} blueMode={blueMode} />} />
            <Route exact path="/aboutUS" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;