import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import lightModeLogo from "./assets/logo-dark.svg"


function Sidebar(props) {
  return (
    <div className="sidebar">

      <div className="sidebar-heading">
        <img src={lightModeLogo} alt="logo"/>
      </div>

      <div className="boards-container">
        <p className="board-counter">ALL BOARDS (3)</p>
        <ul className="board-list">
          <li className="board-selector" data-board="active">
            <img src="" alt="logo"/>
            <span className="board-selector-name">Platform Launch</span>
          </li>
          <li className="board-selector" data-board="create-new-board">
            <img src="" alt="logo"/>
            <span className="board-selector-name">+ Create New Board</span>
          </li>
        </ul>
      </div>

      <div className="brightness-mode">
        <img src="" alt="logo"/>
        
        <ReactSwitch
        checked={props.brightnessChecked}
        onChange={props.toggleBrightness}
        onColor="#635FC7"
        offColor='#A8A4FF'
        uncheckedIcon={false}
        checkedIcon={false}
        handleDiameter={14}
        height={20}
        width={40}
        />

        <img src="" alt="logo"/>
      </div>

      <div className="toggleSidebar">
        <img src="" alt="logo"/>
        <span>Hide Sidebar</span>
      </div>
    </div>
  )
}


function App() {
  const [brightnessChecked, setBrightnessChecked] = useState(true);

  function toggleBrightness(val)  {
    setBrightnessChecked(val)
  }

  return (
    <div className="App">
      <Sidebar
        toggleBrightness={toggleBrightness}
        brightnessChecked={brightnessChecked}
      />
    </div>
  );
}

export default App;
