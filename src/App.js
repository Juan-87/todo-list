import './App.css';

import React from 'react';

import { TodoData } from './components/TodoList';
import { AddTodo } from './components/AddTodo';

const defaultTodos = [
  { text: 'Aprender React', completed: false },
  { text: 'Aprender Vue', completed: true },
  { text: 'Aprender Angular', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
