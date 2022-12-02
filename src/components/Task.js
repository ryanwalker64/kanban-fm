export default function Task({task}) {

    return (
        <div className='task-container'>
                <p className='task-title heading-medium'>{task.title}</p>
                <p className='task-subtasks-counter'>
                    {task.subtasks.filter(subtask => subtask.isCompleted === true).length} of {task.subtasks.length} subtasks complete
                    </p>
        </div>
    )
}
