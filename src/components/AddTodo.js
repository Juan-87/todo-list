import React from 'react';

import { TodoContext } from '../TodoContext';

function AddTodo({ children }) {
    const { 
        toggleModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <article className='createForm'>
                {children}
            </article>

            <button className="CreateTodoButton" onClick={toggleModal}>+</button>
        </React.Fragment>
    );
}

export { AddTodo };