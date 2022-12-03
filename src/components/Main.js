import KanbanColumn from "./KanbanColumn"


export default function Main({activeBoard, toggleModal}) {

    const boardColumns = activeBoard.columns.map(columnData =>  {
        return <KanbanColumn 
        key={columnData.name} 
        column={columnData}
        toggleModal={toggleModal}/>
    } )

    return (
        <main className='main-container'>
        <div className='main-heading'>
          <h1 className='main-board-name'>{activeBoard.name}</h1>
          <button className='add-new-task' onClick={() => toggleModal('', 'createTaskModal')}>+ Add new task</button>
        </div>

        <div className='kanban-container'>
            {boardColumns}
        </div>
      </main>
    )
}