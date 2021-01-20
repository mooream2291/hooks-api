import React from 'react';
//import useState?

const TodoList = (props) => {

  return(
      <ul>
        {props.list.map(item => (
          <li onClick={()=> props.handleComplete(item._id)}
          >
            className={`complete-${item.complete.toString()}`}
            key={item._id}
            {/* handle complete comes from todo.js */}
            <span>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  }


export default TodoList;