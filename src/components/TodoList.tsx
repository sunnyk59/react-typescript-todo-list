import React from 'react'
import TodoCard from './TodoCard'
import { Todo } from '../models/Todo';

interface ToDoListProps {
    toDos: Todo[];
    handleDelete: (index: number) => void;
    handleEdit: (index: number) => void;
    handleDone: (index: number) => void;
}

export default function TodoList(props: ToDoListProps) {

    const { toDos } = props;

    return (
        <ul className='main'>
            {
                toDos.map((todo) => {
                    return (
                        <TodoCard key={todo.id} index={todo.id} toDo={todo} {...props} ></TodoCard>
                    )
                })
            }
        </ul>
    )
}
