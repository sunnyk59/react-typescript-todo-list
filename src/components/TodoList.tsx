import React from 'react'
import TodoCard from './TodoCard'

interface ToDoListProps {
    toDos: string[]
}

export default function TodoList(props: ToDoListProps) {

    const { toDos } = props;
 
    return (
        <ul className='main'>
            {
                toDos.map((todo, index) => {
                    return (
                        <TodoCard key={index} toDo={todo} ></TodoCard>
                    )
                })
            }
        </ul>
    )
}
 