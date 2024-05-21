import { Todo } from '../models/Todo';


interface TodoCardProps {
  index: number;
  toDo: Todo;
  handleDelete: (index: number) => void
  handleEdit: (index: number) => void
  handleDone: (index: number) => void
}

export default function TodoCard(props: TodoCardProps) {

  const { index, toDo, handleDelete, handleEdit, handleDone } = props

  return (
    <li className='todoItem'>

      <p className={toDo.isDone ? 'strikeThrough' : ''}> {toDo.toDo} </p>

      <div className='actionsContainer'>

        <button onClick={() => handleEdit(index)} >
          <i className='fa-solid fa-pen-to-square'></i>
        </button>

        <button onClick={() => handleDelete(index)}>
          <i className='fa-solid fa-trash' ></i>
        </button>

        <button onClick={() => handleDone(index)}>
          <i className='fa-solid fa-check' ></i>
        </button>

      </div>

    </li>
  )
}
