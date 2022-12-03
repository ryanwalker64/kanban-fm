

export default function ModalTaskPreview(props) {
    return (
        <>
            <div className='modal-header'>
              <p className='modal-title'>{props.data.title}</p>
            </div>
              {props.data.description ? <p className="modal-task-description">{props.data.description}</p> : '' }
            
            <p className='modal-subtitle'>Subtasks ({props.data.subtasks.filter(subtask => subtask.isCompleted === true).length} of {props.data.subtasks.length})</p>
            <div className='modal-subtask-container'>
              {props.data.subtasks.map(subtask => {
                return <div key={subtask.title} className='modal-subtask'>
                  <input type="checkbox" defaultChecked={subtask.isCompleted} className="modal-subtask-checkbox" id={subtask.title}/>
                  <label className='modal-subtask-title' htmlFor={subtask.title}>{subtask.title}</label>
                  </div>
              })}
            </div>

            <p className='modal-subtitle'>Current Column</p>
            <select className='modal-task-column-selector'>
            {props.activeBoard.columns.map(column => {
                return <option value={column.name} key={column.name}>{column.name}</option>
              })}
            </select>
          </>
    )
}