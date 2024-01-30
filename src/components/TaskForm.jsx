import { useState,useContext } from "react"
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const {createTask} = useContext(TaskContext)

  const valor = useContext(TaskContext)
  console.log(valor)

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(title, description)
    createTask({title, description})
    setTitle("")
    setDescription("")
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handlesubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 w-full mb-2 p-3"
        />
        <textarea placeholder="Escribe tu descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 w-full mb-2 p-3"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;