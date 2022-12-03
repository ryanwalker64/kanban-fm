import iconCross from '../assets/icon-cross.svg'
import { useState } from 'react'

export default function SubtaskInput(props) {
    const [subTaskTitle, setSubTaskTitle] = useState('')
    console.log(props.id)


    return (
        <div className="modal-subtask-input-container flex-input">
        <input type="text" className="modal-input" placeholder='e.g Take Coffee Break' value={subTaskTitle} onChange={(e) => setSubTaskTitle(e.target.value)}/>
        <img src={iconCross} alt="delete subtask" className='delete-subtask' onClick={() => props.removeSubTaskInput(props.id)}/>
        </div>
    )
}