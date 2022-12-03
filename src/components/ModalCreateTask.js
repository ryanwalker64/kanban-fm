import { useState } from 'react'
import SubtaskInput from './SubtaskInput'

export default function ModalCreateTask(props) {
    const [subtasks, setSubtasks] = useState([{id: new Date(), title: ''}])

    function addSubTaskInput(e) {
        e.preventDefault()
        setSubtasks(subtasks.concat({id: new Date(), title: ''}))
    }

    function removeSubTaskInput(id) { setSubtasks(subtasks.filter(subtask => subtask.id !== id))}

    return (    
            <>
            <div className='modal-header'>
              <p className='modal-title'>Add New Task</p>
            </div>
            <form>
              <div className='modal-input-container'>
                <label className="modal-subtitle">Title</label>
                <input type="text" className="modal-input" placeholder='e.g Take Coffee Break'/>
              </div>
  
              <div className='modal-input-container'>
                <label className="modal-subtitle">Description</label>
                <textarea className="modal-input modal-text-area" placeholder='e.g. It’s always good to take a break. This 15 minute break will 
  recharge the batteries a little.'/>
              </div>
  
              <div className='modal-input-container'>
                <label className="modal-subtitle">Title</label>
                <div className='modal-subtasks-group' data-subtaskgroup>
                  {subtasks.map(subtask => {
                    return <SubtaskInput key={subtask.id} removeSubTaskInput={removeSubTaskInput} id={subtask.id}/>
                  })}
                </div>
                  <button onClick={addSubTaskInput}>+ Add New Subtask</button>
              </div>
  
              <div className='modal-input-container'>
                <p className='modal-subtitle'>Current Column</p>
                <select className='modal-task-column-selector'>
                {props.activeBoard.columns.map(column => {
                    return <option value={column.name} key={column.name}>{column.name}</option>
                  })}
                </select>
              </div>
              <button>+ Add New Subtask</button>
            </form></>

    )
}