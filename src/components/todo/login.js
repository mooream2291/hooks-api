import React, {useContext, useState} from 'react';
import { LoginContext } from './context';

// perhaps I should make some context to keep track of people logging in and out
// this should just be a form

function Login(props){
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginContext = useContext(LoginContext);

  const handleSubmit = e => {
    e.preventDefault();
    // send username and password to context
    loginContext.login(username, password);
  }

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleNameChange} type="text" name="name" />
      <input onChange={handlePasswordChange} type="password" name="password" />
      <button>Sign In</button>
    </form>
  )
}

export default Login;

//THE STATE IS GOING TO UPDATE ASYNCHRONOUSLY
//PUT NA ONCHANGE IN THE INPUT AND UPDATE IT AS WE GO