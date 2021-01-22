import React from 'react';
import Login from './login';
import Auth from './auth';
import Context from './context';

const DeleteLink = props => {
  return (
    //wrapping w/auth component to protect content
    <Auth capability='delete'>
      <div className="App">
  <Context>
    <Login />
    <DeleteLink />
    </Context>
</div>
      <button>delete</button>
    </Auth>
  )
}

export default DeleteLink;