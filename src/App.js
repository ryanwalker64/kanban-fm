import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import database from './data.json'
import Modal from './components/Modal';
import Task from './components/Task';



function App() {
  const [boards, setBoards] = useState(database.boards)
  const [activeBoard, setActiveBoard] = useState(0)
  // Toggle Screen Brightness
  const [brightnessChecked, setBrightnessChecked] = useState(false);
  //Modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  // const [modalType, setModalType] = useState();



  function toggleBrightness(val)  { setBrightnessChecked(val)}

  function setBoardAsActive(id) { setActiveBoard(boards.findIndex(board => board.id === id))}

  function toggleModal(modalContent, modalType) {
        if(modalType === 'taskModal') {
          setModalContent( <>
            <div className='modal-header'>
              <p className='modal-title'>{modalContent.title}</p>
            </div>
              {modalContent.description ? <p className="modal-task-description">{modalContent.description}</p> : '' }
            
            <p className='modal-subtitle'>Subtasks ({modalContent.subtasks.filter(subtask => subtask.isCompleted === true).length} of {modalContent.subtasks.length})</p>
            <div className='modal-subtask-container'>
              {modalContent.subtasks.map(subtask => {
                return <div key={subtask.title} className='modal-subtask'>
                  <input type="checkbox" defaultChecked={subtask.isCompleted} className="modal-subtask-checkbox" id={subtask.title}/>
                  <label className='modal-subtask-title' htmlFor={subtask.title}>{subtask.title}</label>
                  </div>
              })}
            </div>

            <p className='modal-subtitle'>Current Column</p>
            <select className='modal-task-column-selector'>
            {boards[activeBoard].columns.map(column => {
                return <option value={column.name} key={column.name}>{column.name}</option>
              })}
            </select>
          </>)

      } else if (modalType === 'createTaskModal') {
        setModalContent( <>
          <div className='modal-header'>
            <p className='modal-title'>Add New Task</p>
          </div>
          <form>
            <div className='modal-input-container'>
              <label class="modal-subtitle">Title</label>
              <input type="text" class="modal-input" placeholder='e.g Take Coffee Break'/>
            </div>

            <div className='modal-input-container'>
              <label class="modal-subtitle">Description</label>
              <textarea class="modal-input modal-text-area" placeholder='e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little.'/>
            </div>

            <div className='modal-input-container'>
              <label className="modal-subtitle">Title</label>
              <div className="modal-subtask-input-container">
                <input type="text" class="modal-input" placeholder='e.g Take Coffee Break'/>
                <button>+ Add New Subtask</button>
              </div>
            </div>

            <div className='modal-input-container'>
              <p className='modal-subtitle'>Current Column</p>
              <select className='modal-task-column-selector'>
              {boards[activeBoard].columns.map(column => {
                  return <option value={column.name} key={column.name}>{column.name}</option>
                })}
              </select>
            </div>
            <button>+ Add New Subtask</button>
          </form></>)
      }

    setShowModal(!showModal)
  }

  return (
    <div className="App" >

      <Modal title="test" show={showModal} onClose={() => setShowModal(false)}>
        {modalContent}
      </Modal>
      <Sidebar
        database={boards}
        toggleBrightness={toggleBrightness}
        brightnessChecked={brightnessChecked}
        activeBoard={boards[activeBoard]}
        setBoardAsActive={setBoardAsActive}
      />
      <Main 
        activeBoard={boards[activeBoard]}
        toggleModal={toggleModal}
      />
    </div>
  );
}

export default App;
