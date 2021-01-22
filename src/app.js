import React from 'react';
import { Navbar } from 'react-bootstrap';
import ToDo from './components/todo/todo-connected.js';
import Login from './components/todo/login';
// import LoginContext from './components//todo/context';
// import Auth from './components/todo/auth';
import Header from './components/todo/header';
import DeleteLink from './components/todo/delete';

const App = () => {
    return (
      <>
      <Navbar bg = "primary" expand = "large">
      {/* <Navbar.brand href = "#home">Home</Navbar.brand> */}
      <Header />
      <DeleteLink />
      <ToDo />
      </Navbar>
      </>
    );
  }

export default App;