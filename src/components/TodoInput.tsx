import React, { useState } from 'react'

export default function TodoInput() {

    const [toDoValue, setToDoValue] = useState<string>('')
    const [toDos, setToDos] = useState<string[]>([])


    return (
        <header> 
            <button id='tasksCount'>0</button>

            <input placeholder='Enter Task!?' type="text"  
                    value={toDoValue} onChange={(e) => setToDoValue(e.target.value)}/>

            <button onClick={() => setToDos([...toDos, toDoValue])}>Add</button>
        </header>
    )
}
 