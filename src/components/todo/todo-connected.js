import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';
import useAjax from './hooks/ajax.js';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDoConnected = () => {

  const { data, request } = useAjax();
  const [count, setCount] = useState();
  const [list, setList] = useState([]);

console.log(list);
  const _getTodoItems = () => {
    const options = { 
        method: 'get',
        url: todoAPI,    
      }
      request(options);
      setList(data);
      console.log(data);

  };
//when this component mounts it calls this get todo list function
  useEffect(()=> {
    if(list.length === 0){
      _getTodoItems();
    }
    setCount(list.filter(item => !item.complete).length);
    document.title = `todo list: (${count})`;
  }, [data, list, count]); // this is allowing two thigns to happen simultaneously. 

  const _addItem = (item) => {
    const options = { 
 
      method: 'post',
      url: todoAPI,
      data: item,
   
    }
    console.log(item);
    request(options);
    setList(data);

  };

  useEffect(()=> {
    
  })

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    const options = {

      method: 'put',
      url: `${todoAPI}/${id}`, 
      data: { complete: !item.complete },
    }
    const newData = useAjax(options);
    setList(newData);//may need curlies
};

const _delete = async (id) => {
  let item = list.filter(i => i._id === id)[0] || {};
  if(item._id){
    item.complete = !item.complete;
  }
  let url = `${todoAPI}/${id}`;
  await fetch (url, {
    method: 'delete',
    mode: 'cors',
    cache: 'no-cache',
    header: { 'Content-Type': 'application/json'},
    body: JSON.Stringify(item)
    })
    .then (savedItem => {
      _getTodoItems();
    })
    .catch(console.err);
}

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
              deleteOne={_delete}
            />
          </div>
        </section>
    </>
  );
};

export default ToDoConnected;