import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const CustomForm = ({addTask}) => {
    const [task, setTask] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

    return (
        <form 
            className="todo"
            onSubmit={handleFormSubmit}
            >
            
            <div className="wrapper">
                <input 
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={80}
                    placeholder="task"

                />
                <label 
                    htmlFor="task"
                    className="label"
                >Enter Task</label>

            <button 
                className="btn"
                aria-label="add"
                type="submit"
                >
                <PlusCircleIcon width={24} height={24}/>
            </button>
            </div>

        </form>
    )
}

export default CustomForm
