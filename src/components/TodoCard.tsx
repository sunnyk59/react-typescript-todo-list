import React from 'react'


interface TodoCardProps {
  toDo: string 
}

export default function TodoCard(props: TodoCardProps) {

  const { toDo } = props

  return (
    <li className='todoItem'>
      <p>{ toDo }</p>  
      <div className='actionsContainer'>
        <i className='fa-solid fa-pen-to-square'></i>
        <i className='fa-solid fa-trash'></i>
      </div>

    </li>
  )
}
 