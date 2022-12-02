import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import database from './data.json'


function App() {
  const [boards, setBoards] = useState(database.boards)
  const [activeBoard, setActiveBoard] = useState(0)
  const [brightnessChecked, setBrightnessChecked] = useState(false);

  function toggleBrightness(val)  {
    setBrightnessChecked(val)
  }

  return (
    <div className="App">
      <Sidebar
        database={boards}
        toggleBrightness={toggleBrightness}
        brightnessChecked={brightnessChecked}
      />
      <Main 
        activeBoard={boards[activeBoard]}
      />
    </div>
  );
}

export default App;
