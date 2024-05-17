import React, { useState } from 'react'

interface TodoInputProps {
    handleAddToDos: (newTodo: string) => void
    setToDoValue: (value: string) => void
    toDoValue: string
}

export default function TodoInput(props: TodoInputProps) {

    const { handleAddToDos, toDoValue, setToDoValue } = props


    return (
        <header>
            <button id='tasksCount'>0</button>

            <input placeholder='Enter Task!?' type="text" id='todoInput'
                value={toDoValue} onChange={(e) => setToDoValue(e.target.value)} />

            <button onClick={
                () => {
                    handleAddToDos(toDoValue);
                    setToDoValue('');
                }}>Add</button>
        </header>
    )
}
