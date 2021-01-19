import React from 'react';
//import useState?

const TodoList = (props) => {//change this

  return(
      <ul>
        {props.list.map(item => (//change this
          <li>
            className={`complete-${item.complete.toString()}`}//change item.complete?
            key={item._id}
          >
            handle complete comes from todo.js
            <span onClick={() => this.props.handleComplete(item._id)}>
              {/* change this.props */}
              {item.text}
              {/* maybe mess with this? */}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;