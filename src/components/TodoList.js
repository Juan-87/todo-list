import React from 'react';

function TodoCounter(props) {
    const completes = props.todos.filter(todo => todo.completed).length;
    const tareasText = completes === 1 ? 'tarea' : 'tareas';

    return (
        <h2>Has completado {completes} {tareasText} de {props.todos.length}</h2>
    );
}

function TodoSearch() {
    const onSearch = (e) => {
        console.log(e.currentTarget.value);
    };

    return (
        <input type="text" placeholder="Buscar" onChange={onSearch} />
    );
}

function TodoItem(props) {
    const onComplete = () => {
        alert('tarjeta completada');
    };

    const onDelete = (e) => {
        e.stopPropagation();

        alert('tarjeta eliminada');
    };

    return (
        <li>
            <label className={`${props.completed && 'active'}`} onClick={onComplete}>
                <span className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                </span>

                {props.text}

                <span className="closemark " onClick={onDelete}></span>
            </label>
        </li>
    );
}

function TodoList(props) {
    return (
        <section>
            <ul className='todoList'>
                {props.todos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
            </ul>
        </section>
    );
}

function TodoData(props) {
    return (
        <React.Fragment>
            <TodoCounter todos={props.todos} />

            <TodoSearch />

            <hr />

            <TodoList todos={props.todos} />
        </React.Fragment>
    );
}

export { TodoData, TodoCounter, TodoSearch, TodoList, TodoItem };