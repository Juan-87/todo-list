import React from 'react';

function TodoCounter({ completed, total }) {
    return (
        <h2>Has completado {completed} {completed === 1 ? 'tarea' : 'tareas'} de {total}</h2>
    );
}

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearch = (e) => {
        setSearchValue(e.currentTarget.value);
    };

    return (
        <input type="text" placeholder="Buscar" onChange={onSearch} value={searchValue} />
    );
}

function TodoItem({ todo, todos, setTodos }) {
    const onComplete = () => {
        const index = todos.indexOf(todo);
        todos[index].completed = !todo.completed;

        setTodos([...todos]);

        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const onDelete = (e) => {
        e.stopPropagation();

        const index = todos.indexOf(todo);
        todos.splice(index, 1);

        setTodos([...todos]);

        localStorage.setItem('todos', JSON.stringify(todos));
    };

    return (
        <li>
            <label className={`${todo.completed && 'active'}`} onClick={onComplete}>
                <span className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                </span>

                {todo.text}

                <span className="closemark " onClick={onDelete}></span>
            </label>
        </li>
    );
}

function TodoList({ todos, setTodos, filtered }) {
    return (
        <section>
            <ul className='todoList'>
                {filtered.map(todo => (<TodoItem key={todo.text} todo={todo} todos={todos} setTodos={setTodos} />))}
            </ul>
        </section>
    );
}

function TodoData({ searchValue, setSearchValue, todos, setTodos }) {
    const completed = todos.filter(todo => todo.completed).length;
    const total = todos.length;
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <React.Fragment>
            <TodoCounter completed={completed} total={total} />

            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <hr />

            <TodoList filtered={filteredTodos} todos={todos} setTodos={setTodos} />
        </React.Fragment>
    );
}

export { TodoData, TodoCounter, TodoSearch, TodoList, TodoItem };