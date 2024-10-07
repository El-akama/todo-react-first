import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const EditForm = ({editedTask, updateTask}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName})
        
    }

    return (
        <div 
        role='diaolg' 
        aria-labelledby='editTask' 
        //onClick={}
        >
            <form
                className="todo"
                onSubmit={handleFormSubmit}
                >
            
                <div className="wrapper">
                    <input
                        type="text"
                        id="eittTask"
                        className="input"
                        value={updatedTaskName}
                        onInput={(e) => setUpdatedTaskName(e.target.value)}
                        required
                        autoFocus
                        maxLength={80}
                        placeholder="update task"
                    />
                    <label
                        htmlFor="editTask"
                        className="label"
                    >update Task</label>
                <button
                    className="btn"
                    aria-label={"confirm ${updatedTaskName}"}
                    type="submit"
                    >
                    <CheckIcon strokeWidth={2}  height={24} width={24}/>
                </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm
