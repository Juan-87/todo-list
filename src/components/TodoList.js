import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { 
        completed, 
        total, 
    } = React.useContext(TodoContext);

    return (
        <h2>Has completado {completed} {completed === 1 ? 'tarea' : 'tareas'} de {total}</h2>
    );
}

function TodoSearch() {
    const { 
        searchValue, 
        searchTodo
    } = React.useContext(TodoContext);

    return (
        <input type="text" placeholder="Buscar" onChange={(e) => searchTodo(e)} value={searchValue} />
    );
}

function TodoItem({ todo }) {
    const {
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <li>
                <label className={`${todo.completed && 'active'}`} onClick={() => completeTodo(todo)}>
                    <span className="checkmark">
                        <div className="checkmark_stem"></div>
                        <div className="checkmark_kick"></div>
                    </span>

                    {todo.text}

                    <span className="closemark " onClick={(e) => deleteTodo(e, todo)}></span>
                </label>
            </li>
        </React.Fragment>
    );
}

function TodoList() {
    const { 
        todos, 
        filteredTodos
    } = React.useContext(TodoContext);

    return (
        <section>
            {todos.length === 0 && <p className='first-todo'>Crea tu primer tarea.</p>}
            {filteredTodos.length === 0 && <p className='first-todo'>No se encontraron tareas.</p>}

            <ul className='todoList'>
                {filteredTodos.map(todo => (<TodoItem key={todo.text} todo={todo} />))}
            </ul>
        </section>
    );
}

function TodoData() {
    const { 
        completed, 
        total, 
        searchValue, 
        setSearchValue, 
        filteredTodos, 
        todos, 
        setTodos
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

            <hr />

            <TodoList />
        </React.Fragment>
    );
}

export { TodoData, TodoCounter, TodoSearch, TodoList, TodoItem };