import './App.css';

import React from 'react';

import { TodoData } from './components/TodoList';
import { AddTodo } from './components/AddTodo';

const todos = [
  { text: 'Aprender React', completed: false },
  { text: 'Aprender Vue', completed: true },
  { text: 'Aprender Angular', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <section className="wrapper">
        <article className='listContainer'>
          <TodoData todos={todos} />
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
