import KanbanColumn from "./KanbanColumn"

export default function Main({activeBoard}) {

    const boardColumns = activeBoard.columns.map(columnData =>  <KanbanColumn key={columnData.name} column={columnData}/> )

    return (
        <main className='main-container'>
        <div className='main-heading'>
          <h1 className='main-board-name'>{activeBoard.name}</h1>
          <button className='add-new-task'>+ Add new task</button>
        </div>

        <div className='kanban-container'>
            {boardColumns}
        </div>
      </main>
    )
}