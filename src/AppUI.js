import React from 'react';

import { TodoData } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { AddTodoForm } from './components/AddTodoForm';
import { Modal } from './components/Modal';

import { TodoContext } from './TodoContext';

function AppUI() {
  const { 
    openModal, 
    toggleModal
  } = React.useContext(TodoContext);

  const width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

  return (
    <React.Fragment>
      <section className="wrapper">
        <article className='listContainer'>
          <TodoData />
        </article>

        <AddTodo>
          <AddTodoForm />
        </AddTodo>
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

      {(openModal && width <= 600) && (
        <Modal>
          <button onClick={toggleModal}>Cerrar</button>

          <AddTodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };