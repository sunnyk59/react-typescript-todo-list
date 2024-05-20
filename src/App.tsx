import { useEffect, useRef, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { Todo } from './models/Todo';

export default function App() {

  const [toDoValue, setToDoValue] = useState<string>('');
  const [toDos, setToDos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [])


  function handleAddToDos(newTodo: string): void {
    const newTodoToAdd = { id: Date.now(), toDo: newTodo, isDone: false };
    const newToDos = [...toDos, newTodoToAdd] as Todo[];
    console.log(newToDos)
    setToDos(newToDos);
  }

  function handleDelete(index: number): void {
    const filteredToDos = toDos.filter((todo) => todo.id !== index);
    setToDos(filteredToDos);
  }

  function handleDone(index: number): void {
    // const newToDos = [...toDos];
    const newToDos = toDos.map((todo) => {
      if (todo.id === index) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo
    });
    setToDos(newToDos);
  }

  function handleEdit(index: number): void {
    const toDoItem = toDos.find((todo: Todo) => todo.id === index);
    if (toDoItem) setToDoValue(toDoItem.toDo);
    handleDelete(index);

    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    todoInput.focus();
  }


  return (
    <>
      <TodoInput toDoValue={toDoValue} setToDoValue={setToDoValue} handleAddToDos={handleAddToDos} inputRef={inputRef} />
      <TodoList toDos={toDos} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone} />
    </>
  )
}


