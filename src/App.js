import './App.css';

import React from 'react';

import { TodoData } from './components/TodoList';
import { AddTodo } from './components/AddTodo';

function useLocalStorage(itemName, initialValue) {
  const storage = localStorage.getItem(itemName);
  const parsedStorage = storage ? JSON.parse(storage) : initialValue;

  const [items, setItems] = React.useState(parsedStorage);

  const saveItems = (items) => {
    localStorage.setItem(itemName, JSON.stringify(items));

    setItems([...items]);
  }

  return [items, saveItems];
}

function App() {
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <React.Fragment>
      <section className="wrapper">
        <article className='listContainer'>
          <TodoData searchValue={searchValue} setSearchValue={setSearchValue} todos={todos} setTodos={setTodos} />
        </article>

        <article className='createForm'>
          <AddTodo />
        </article>
      </section>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </React.Fragment>
  );
}

export default App;
