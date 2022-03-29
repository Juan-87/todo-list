import React from 'react';

function AddTodo() {
    const addTodoToList = (msg) => {
        alert(msg);
    }

    return (
        <React.Fragment>
            <h2>Crear nueva tarea</h2>

            <input type="text" placeholder="Nueva tarea" />

            <button onClick={() => addTodoToList('test')}>Agregar</button>.
        </React.Fragment>
    );
}

export { AddTodo };