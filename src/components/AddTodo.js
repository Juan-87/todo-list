import React from 'react';

function AddTodo() {
    return (
        <React.Fragment>
            <h2>Crear nueva tarea</h2>

            <input type="text" placeholder="Nueva tarea" />

            <button>Agregar</button>
        </React.Fragment>
    );
}

export { AddTodo };