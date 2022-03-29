import React from 'react';

import { TodoContext } from '../TodoContext';

function AddTodoForm() {
    const { 
        addTodo, 
        addTodoError
    } = React.useContext(TodoContext);

    const [newText, setNewText] = React.useState('');

    const onNewTextChange = (e) => {
        setNewText(e.currentTarget.value);
    }

    const addTodoForm = () => {
        addTodo(newText);
        setNewText('');
    }

    return (
        <React.Fragment>
            <h2>Crear nueva tarea</h2>

            <input type="text" placeholder="Nueva tarea" onChange={onNewTextChange} value={newText} />

            <button onClick={addTodoForm}>Agregar</button>

            {addTodoError && <p className='error'>{addTodoError}</p>}
        </React.Fragment>
    );
}

export { AddTodoForm };