import Task from "./Task"

export default function KanbanColumn({column}) {

    const tasks = column.tasks.map(taskData => <Task key={taskData.title} task={taskData}/>)

    return (
        <div className='kanban-column'>
            <div className="column-header">
              <div className='column-colour'></div>
              <p className="column-task-counter">{column.name} ({column.tasks.length})</p>
            </div>
            <div className="column-tasks-container">
              {tasks}
            </div>
          </div>
    )
}