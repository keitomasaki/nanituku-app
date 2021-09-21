import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { AuthContext } from '../contexts/AuthContextProvider';
import { SnackBarContext } from '../contexts/SnackBarContextProvider';
import { regexPattern } from '../utils/regexPattern';

const SignIn = () => {
  const history = useHistory();
  const { setData, signInFunc, confirmData } = useContext(AuthContext);
  const { openSnackBar } = useContext(SnackBarContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitFunc = () => {
    const emailResult = email.match(regexPattern.EMAIL_PATTERN);
    if (emailResult === null) {
      openSnackBar('適正なメールアドレスの形式ではありません');
      return null;
    }

    const passwordResult = password.match(regexPattern.PASSWORD_PATTERN);
    console.log();
    if (passwordResult === null) {
      openSnackBar('パスワードは６文字以上にしてください');
      return null;
    }

    signInFunc(email, password, history);
  };

  return (
    <div>
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
      <Button variant='outlined' onClick={handleSubmitFunc}>
        submit
      </Button>
    </div>
  );
};

export default SignIn;
