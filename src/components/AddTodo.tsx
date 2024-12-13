import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";


const AddToDo = () => {

    const [todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos();

    const handleFormSumit = (e:FormEvent<HTMLElement>) => {
        e.preventDefault();
        handleAddToDo(todo)
        setTodo("");
    }

  return (
    <form action="" onSubmit={handleFormSumit}>
        <input type="text" name="" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddToDo

