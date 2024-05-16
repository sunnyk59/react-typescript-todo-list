import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {

    let randomToDos: string[] = ['Clean Room!', 'Find Job!'];

    return (
        <ul className='main'>
            {
                randomToDos.map((todo, index) => {
                    return (
                        <TodoCard key={index} toDo={todo} ></TodoCard>
                    )
                })
            }
        </ul>
    )
}
 