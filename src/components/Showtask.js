import "./Addtask";

export const Showtask = ({tasklist, settasklist,task,setTask}) => {

    const handleEdit =(id) =>{
        const selectedTask = tasklist.find(todo =>todo.id ===id);
        setTask(selectedTask);
         

    }

    const handleDelete= (id) =>{
        const updatedTaskList =tasklist.filter(todo =>todo.id !==id);
        settasklist(updatedTaskList);
    }
  

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">TODO</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button className="clearAll" onClick={() =>settasklist([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((task) => (
                <li key={task.id}>
                    <p>
                        <span className="name">{task.name}</span>
                        <span>{task.time}</span>
                    </p>
                    <p className="dueDate">
                        Due Date:{task.dueDate || " No due date!"}
                    </p>
                    <i  className="bi bi-pencil" onClick={() => handleEdit(task.id)}></i>
                    <i className="bi bi-trash3"  onClick={() =>handleDelete(task.id)}></i>
                </li>

           ))}
            
        </ul>
    </section>
    
  )
}
