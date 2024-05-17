import React from 'react'
import TodoCard from './TodoCard'

interface ToDoListProps {
    toDos: string[];
    handleDelete: (index: number) => void;
    handleEdit: (index: number) => void;
}

export default function TodoList(props: ToDoListProps) {

    const { toDos } = props;

    return (
        <ul className='main'>
            {
                toDos.map((todo, index) => {
                    return (
                        <TodoCard key={index} index={index} toDo={todo} {...props} ></TodoCard>
                    )
                })
            }
        </ul>
    )
}
