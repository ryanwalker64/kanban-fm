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
  const [modalType, setModalType] = useState();

  function toggleBrightness(val)  { setBrightnessChecked(val)}

  function setBoardAsActive(id) { setActiveBoard(boards.findIndex(board => board.id === id))}

  function toggleModal(modalData, modalTypeSelected) {
      setModalType(modalTypeSelected)
      setModalContent(modalData)
      setShowModal(!showModal)
  }


  return (
    <div className="App" >

      <Modal 
        title="test" 
        show={showModal}
        type={modalType} 
        content={modalContent}
        activeBoard={boards[activeBoard]}
        onClose={() => setShowModal(false)}
      />

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
