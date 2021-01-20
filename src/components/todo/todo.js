import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './todo.scss';

const ToDo = () => {
  const [count, setCount] = useState();

  const [list, setList] = useState([
    { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
  ])


  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    this.setList([...list, item]);
  };

  const toggleComplete = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      setList(list.map(listItem => listItem._id === item._id ? item : listItem));
    }

  };

  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
  }, [list]);

  useEffect(() => {
    document.title = `todo list: (${count})`;
  }, [count]);


  return (
    <>
      <header>
        <h2>
          There are {setCount} Items To Complete
          </h2>
      </header>
      <Router>
        <section className="todo">
          <Route path="/" exact component={ToDo} />
          <Route path="/edit/:id" component={toggleComplete} />
          <Route path="/create" component={AddItem} />
          <Route path="/delete" component={deleteItem} />
          <div>
            {/* change this.addItem */}
            <TodoForm handleSubmit={this.addItem} />
          </div>

          <div>
            <TodoList
              // change this.state.list
              list={this.state.list}
              // change this.toggleComplete
              handleComplete={this.toggleComplete}
            />
          </div>
        </section>
      </Router>
    </>
  );
}

export default ToDo;