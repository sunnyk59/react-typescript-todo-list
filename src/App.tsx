import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {

  const [toDoValue, setToDoValue] = useState<string>('');
  const [toDos, setToDos] = useState<string[]>([]);

  function handleAddToDos(newTodo: string): void {
    const newToDos = [...toDos, newTodo];
    setToDos(newToDos);
  }

  function handleDelete(index: number): void {
    const filteredToDos = toDos.filter((todo, i) => i !== index);
    setToDos(filteredToDos);
  }

  function handleEdit(index: number): void {
    handleDelete(index);
    setToDoValue(toDos[index]);

    const todoInput = document.getElementById('todoInput') as HTMLInputElement;  
    todoInput.focus(); 
  }


  return (
    <>
      <TodoInput toDoValue={toDoValue} setToDoValue={setToDoValue} handleAddToDos={handleAddToDos}></TodoInput>
      <TodoList toDos={toDos} handleDelete={handleDelete} handleEdit={handleEdit}  ></TodoList>
    </>
  )
}


