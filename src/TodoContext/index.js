import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [addTodoError, setAddTodoError] = React.useState('');
    const completed = todos.filter(todo => todo.completed).length;
    const total = todos.length;
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodo = (todo) => {
        const index = todos.indexOf(todo);
        todos[index].completed = !todo.completed;

        setTodos(todos);
    };

    const deleteTodo = (e, todo) => {
        e.stopPropagation();

        const index = todos.indexOf(todo);
        todos.splice(index, 1);

        setTodos(todos);
    };

    const searchTodo = (e) => {
        setSearchValue(e.currentTarget.value);
    };

    const addTodo = (text) => {
        if (text.trim() === '') {
            setAddTodoError('La tarea no puede estar vacía.');
            return;
        }

        if (todos.find(todo => todo.text === text)) {
            setAddTodoError('La tarea ya existe.');
            return;
        }

        setTodos([...todos, { text, completed: false }]);
        setAddTodoError('');
        toggleModal();
    }

    const toggleModal = () => {
        setOpenModal(!openModal);
        setAddTodoError('');
    };

    return (
        <TodoContext.Provider value={{
            completeTodo, 
            deleteTodo, 
            searchTodo, 
            todos, 
            setTodos, 
            searchValue, 
            setSearchValue, 
            completed, 
            total, 
            filteredTodos, 
            openModal, 
            setOpenModal, 
            toggleModal, 
            addTodo, 
            addTodoError,
            setAddTodoError
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };