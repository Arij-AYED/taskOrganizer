

export const Addtask = ({tasklist, settasklist,task,setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

      
        if(task.id){
            const date = new Date();
            const updateTask = tasklist.map((todo)=>(
                todo.id ===task.id
                 ? {
                    id: task.id ,
                    name: task.name ,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} ` ,
                    dueDate: task.dueDate
                } 
                : todo)

            );
            settasklist(updateTask);
            setTask({});

        }else{

        const date =new Date();

        const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()} `,
            dueDate: e.target.dueDate.value
        };
        settasklist([...tasklist, newTask]);
        setTask({});
    }

    }
  return (
   <section className="addTask">
    <form onSubmit={handleSubmit}>
        <input type="text" name="task"  value={task.name || ""} autoComplete="off" placeholder="add task" maxLength={25} onChange={ e => setTask({...task, name:e.target.value})} / >
        <input type='date'
        name="dueDate"
        value={task.dueDate || ""}
        onChange={(e) => setTask({...task, dueDate:e.target.value})}/>
        <button type="submit">{task.id ? "Update" : "Add"} </button>
    </form>
   </section>
  )
}
