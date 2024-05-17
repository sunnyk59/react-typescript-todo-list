import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {

  const [toDoValue, setToDoValue] = useState<string>('');
  const [toDos, setToDos] = useState<string[]>([]);
 
  function handleAddToDos(newTodo: string) : void {
    const newToDos = [...toDos, newTodo];
    setToDos(newToDos);
  }


  return (
    <>
      <TodoInput toDoValue={toDoValue} setToDoValue={setToDoValue} handleAddToDos={handleAddToDos}></TodoInput>
      <TodoList toDos={toDos} ></TodoList>
    </>
  )
}


