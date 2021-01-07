import React from "react";
import logo from './logo.svg';
import './App.css';
import { MyDatePicker } from './components/DatePicker';

function App() {
  const [startDate, setStartDate] = React.useState(null);
  const oneDay = 24 * 60 * 60 * 1000;
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>When did you give your wing to AXIS?</h1>
        <MyDatePicker sendDateToParent={date => setStartDate(date)} />
        <p>{startDate ? 'I\'ts been neverending ' + Math.round(Math.abs((startDate - new Date()) / oneDay)) + ' days' : null}</p>
      </header>
    </div>
  );
}

export default App;
