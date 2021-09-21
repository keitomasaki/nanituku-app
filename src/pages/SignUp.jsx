import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { AuthContext } from '../contexts/AuthContextProvider';
import { SnackBarContext } from '../contexts/SnackBarContextProvider';
import { signUp } from '../firebase/signUp';
import { logout } from '../firebase/auth';

const SignUp = () => {
  const history = useHistory();
  const { setData } = useContext(AuthContext);
  const { openSnackBar } = useContext(SnackBarContext);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    history.push('/Sub1');
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const submitData = {
      username,
    };

    setData(submitData);
    signUp(username, email, password, history, openSnackBar);
  };
  return (
    <div>
      <p>main</p>
      <div>
        <button onClick={handleClick}>button</button>
      </div>
      <hr />
      <TextField
        size='small'
        label='name'
        variant='outlined'
        onChange={(e) => handleNameChange(e)}
      />
      <TextField
        size='small'
        label='email'
        variant='outlined'
        onChange={(e) => handleEmailChange(e)}
      />
      <TextField
        size='small'
        label='password'
        variant='outlined'
        onChange={(e) => handlePasswordChange(e)}
      />
      <div>
        <Button variant='outlined' onClick={() => handleSubmit()}>
          submit
        </Button>
        <Button variant='outlined' onClick={() => logout()}>
          logout
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
