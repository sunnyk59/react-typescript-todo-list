import React from 'react'


interface TodoCardProps {
  index: number;
  toDo: string;
  handleDelete: (index: number) => void
  handleEdit: (index: number) => void
}

export default function TodoCard(props: TodoCardProps) {

  const { index, toDo, handleDelete, handleEdit } = props

  return (
    <li className='todoItem'>

      <p>{toDo}</p>

      <div className='actionsContainer'>

        <button onClick={() => handleEdit(index)} >
          <i className='fa-solid fa-pen-to-square'></i>
        </button>

        <button onClick={() => handleDelete(index)}>
          <i className='fa-solid fa-trash' ></i>
        </button> 

      </div>

    </li>
  )
}
