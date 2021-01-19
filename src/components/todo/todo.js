import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
//import useState?

import './todo.scss';

function ToDo(props) {
    this.state = {//change this to what?
      list: [],
    };
  }

  const addItem = (item) => { //make a const
    item._id = Math.random();
    item.complete = false;
    this.setState({ list: [...this.state.list, item]}); //change this. (reference form.js)
  };

  const toggleComplete = id => { //make a const

    let item = this.state.list.filter(i => i._id === id)[0] || {};//change this.state

    if (item._id) {
      item.complete = !item.complete;
      let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
      this.setState({list});
    }

  };

 const componentDidMount() { //make a const?
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    this.setState({list}); //change this.setState
  }

    return (
      <>
        <header>
          <h2>
            {/* change this.state or any this */}
          There are {this.state.list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

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
      </>
    );
  }
}

export default ToDo;