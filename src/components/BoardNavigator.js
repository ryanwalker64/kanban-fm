import iconboard from "../assets/icon-board.svg"

export default function BoardNavigator(props) {
    const isBoardActive = props.activeBoard.id === props.id 
      ? 'active'
      : ''
  
    return (
      <li className="board-selector" data-board={isBoardActive}  onClick={() => props.setBoardAsActive(props.id)}>
              <img src={iconboard} alt="logo" className='board-selector-icon'/>
              <span className="board-selector-name">{props.name}</span>
      </li>
    )
  }