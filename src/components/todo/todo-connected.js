import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';
import useAjax from './hooks/ajax.js';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDoConnected = () => {

  const { data, request } = useAjax();
  const [list, setList] = useState([]);
  // const [count, setCount] = useState();

  const _getTodoItems = () => {
    const options = { 
        method: 'get',
        url: todoAPI,    
      }
      console.log(options);
      const obj = request(options);
      console.log(obj)
      // setList(data);//may need curlies
  };
//when this component mounts it calls this get todo list function
  useEffect(()=> {
    _getTodoItems();
  }, []); // this is allowing two thigns to happen simultaneously. 

  const _addItem = (item) => {
    const options = { 
    // item.due = new Date(),
    // fetch(todoAPI, {
      method: 'post',
      url: todoAPI,
      data: item,
      // mode: 'cors'
      // cache: 'no-cache',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(item)
    }
    useAjax(options);
      // .then(response => response.json())
      // .then(savedItem => {
        // setList([...list, savedItem])
      // })
      // .catch(console.error);
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    const options = { 
      method: 'put',
      url: `${todoAPI}/${id}`, 
      data: { complete: !item.complete },
    }
    const data = useAjax(options);
    setList(data);//may need curlies
};

    // let item = list.filter(i => i._id === id)[0] || {};

    // if (item._id) {

    //   item.complete = !item.complete;

    //   let url = `${todoAPI}/${id}`;

    //   fetch(url, {
    //     method: 'put',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(item)
    //   })
    //     .then(response => response.json())
    //     .then(savedItem => {
    //       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
    //     })
    //     .catch(console.error);
  // };

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>
        <section className="todo">
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={_toggleComplete}
            />
          </div>
        </section>
    </>
  );
};

export default ToDoConnected;