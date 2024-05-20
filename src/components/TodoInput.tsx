import React, { RefObject, useState } from 'react'

interface TodoInputProps {
    toDoValue: string;
    setToDoValue: (value: string) => void;
    handleAddToDos: (newTodo: string) => void;
    inputRef: RefObject<HTMLInputElement>;
}

export default function TodoInput(props: TodoInputProps) {

    const { toDoValue, setToDoValue, handleAddToDos, inputRef } = props


    return (
        <header>

            <input placeholder='Enter Task!?'
                type="text"
                id='todoInput'
                value={toDoValue}
                onChange={(e) => setToDoValue(e.target.value)}
                ref={inputRef}
            />

            <button onClick={() => {
                handleAddToDos(toDoValue);
                setToDoValue('');
                inputRef.current?.focus();
            }}>Add</button>

        </header>
    )
}
