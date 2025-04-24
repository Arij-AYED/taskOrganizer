import {Header} from "./components/Header";
import {Addtask} from "./components/Addtask";
import {Showtask} from "./components/Showtask";
import {useState} from 'react';
import './App.css';
import { useEffect } from "react";
function App() {
  const [tasklist, settasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
  }, [tasklist]);
  return (
    <div className="App">
      <Header />
      <Addtask 
      tasklist={tasklist}
       settasklist={settasklist}
       task={task}
       setTask={setTask}
       />
      <Showtask 
      tasklist={tasklist} 
      settasklist={settasklist}
      task={task}
      setTask={setTask}
      />

    </div>
  );
}

export default App;
