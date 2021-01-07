import React from "react";
import './App.css';
import { MyDatePicker } from './components/DatePicker';
import ReactPlayer from "react-player"

function App() {
  const [startDate, setStartDate] = React.useState(null);
  const oneDay = 24 * 60 * 60 * 1000;
  return (

    <div className="App">
      <header className="App-header">
        <h1>When did you give your wind to AXIS?</h1>
        <MyDatePicker sendDateToParent={date => setStartDate(date)} />
        {startDate ? <div><p>{'I\'ts been neverending ' + Math.round(Math.abs((startDate - new Date()) / oneDay)) + ' days 😢'}</p>
          <p>Don't worry, cheer yourself up by watching this video!</p>
          <ReactPlayer url="https://www.youtube.com/watch?v=m5ymyla1LD0" />
        </div>
          : null}
      </header>
    </div>
  );
}

export default App;
