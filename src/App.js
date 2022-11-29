import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import database from './data.json'


function App() {
  const [boards, setBoards] = useState(database)
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
      <main className='main-container'>
        <div className='main-heading'>
          <h1 className='main-board-name'>Test</h1>
          <button className='add-new-task'>+ Add new task</button>
        </div>

        <div className='kanban-container'>
          <div className='kanban-column'>
            <div className="column-header">
              <div className='column-colour'></div>
              <p className="column-task-counter">Column name (4)</p>
            </div>
            <div className="column-tasks-container">
              <div className='task-container'>
                <p className='task-title'>Build Ui for Kanban</p>
                <p className='task-subtasks-counter'>0 of 6 subtasks</p>
              </div>
            </div>
          </div>
          <div className='kanban-column'>
            <div className="column-header">
              <div className='column-colour'></div>
              <p className="column-task-counter">Column name (4)</p>
            </div>
            <div className="column-tasks-container">
              <div className='task-container'>
                <p className='task-title'>Build Ui for Kanban</p>
                <p className='task-subtasks-counter'>0 of 6 subtasks</p>
              </div>
              <div className='task-container'>
                <p className='task-title'>Build Ui for Kanban</p>
                <p className='task-subtasks-counter'>0 of 6 subtasks</p>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
