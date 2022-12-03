
import ReactSwitch from 'react-switch';
import { useState } from 'react';
import lightModeLogo from "../assets/logo-dark.svg"
import iconboard from "../assets/icon-board.svg"
import iconLightTheme from "../assets/icon-light-theme.svg"
import iconDarkTheme from "../assets/icon-dark-theme.svg"
import iconShowSidebar from "../assets/icon-show-sidebar.svg"
import iconHideSidebar from "../assets/icon-hide-sidebar.svg"
import BoardNavigator from './BoardNavigator';


export default function Sidebar(props) {
  const [sidebarVisibility, setSidebarVisibility] = useState('active')

  const boards = props.database.map(board => {
    return <BoardNavigator 
    name={board.name} 
    key={board.id} 
    id={board.id} 
    activeBoard={props.activeBoard}
    setBoardAsActive={props.setBoardAsActive}
    />
  })

  function toggleSidebar() {
    setSidebarVisibility(sidebarVisibility !== 'active' ? 'active' : '')
  }

  return (
    <>
     {sidebarVisibility === 'active' ?
      <div className="sidebar">

        <div className="sidebar-heading">
          <img src={lightModeLogo} alt="logo"/>
        </div>

        <div className="boards-container">
          <p className="board-counter">ALL BOARDS ({props.database.length})</p>
          <ul className="board-list">
            {boards}
            <li className="board-selector" data-board="create-new-board">
              <img src={iconboard} alt="logo" className='board-selector-icon'/>
              <span className="board-selector-name">+ Create New Board</span>
            </li>
          </ul>
        </div>

        <div className="brightness-mode">
          <img src={iconLightTheme} alt="logo"/>
          
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

          <img src={iconDarkTheme} alt="logo"/>
        </div>

        <div className="toggleSidebar" onClick={() => toggleSidebar()}>
          <img src={iconHideSidebar} alt="logo"/>
          <span>Hide Sidebar</span>
        </div>
      </div> 

      : 
      
      <div className="show-sidebar-btn" onClick={() => toggleSidebar()}>
        <img src={iconShowSidebar} alt="logo"/>
        </div>}
    </>
  )
}