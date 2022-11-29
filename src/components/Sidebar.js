
import ReactSwitch from 'react-switch';
import lightModeLogo from "../assets/logo-dark.svg"
import iconboard from "../assets/icon-board.svg"
import iconLightTheme from "../assets/icon-light-theme.svg"
import iconDarkTheme from "../assets/icon-dark-theme.svg"
// import iconShowSidebar from "../assets/icon-show-sidebar.svg"
import iconHideSidebar from "../assets/icon-hide-sidebar.svg"

function Board(props) {
  return (
    <li className="board-selector" data-board="">
            <img src={iconboard} alt="logo" className='board-selector-icon'/>
            <span className="board-selector-name">{props.name}</span>
    </li>
  )
}

export default function Sidebar(props) {
  const boards = props.database.boards.map(board => {
    return <Board name={board.name} key={board.name}/>
  })


  return (
    <div className="sidebar">

      <div className="sidebar-heading">
        <img src={lightModeLogo} alt="logo"/>
      </div>

      <div className="boards-container">
        <p className="board-counter">ALL BOARDS ({props.database.boards.length})</p>
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

      <div className="toggleSidebar">
        <img src={iconHideSidebar} alt="logo"/>
        <span>Hide Sidebar</span>
      </div>
    </div>
  )
}