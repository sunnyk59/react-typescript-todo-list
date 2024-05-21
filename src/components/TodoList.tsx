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

    const activeTasks = toDos.filter((todo) => todo.isDone === false);
    const completedTasks = toDos.filter((todo) => todo.isDone === true);

    return (

        <div className='lists-container'>
            <div className='main' >
                <h2 className='heading'>Active Tasks</h2>
                <ul>
                    {
                        activeTasks.map((todo) => {
                            return (
                                <TodoCard key={todo.id} index={todo.id} toDo={todo} {...props}></TodoCard>
                            )
                        })
                    }
                </ul>
            </div>

            <div className='main'>
                <h2 className='heading'>Completed Tasks</h2>
                <ul>
                    {
                        completedTasks.map((todo) => {
                            return (
                                <TodoCard key={todo.id} index={todo.id} toDo={todo} {...props}></TodoCard>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}
