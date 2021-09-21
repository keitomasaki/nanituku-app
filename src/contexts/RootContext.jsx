import React from 'react';
import AuthContextProvider from './AuthContextProvider';
import SnackBarContextProvider from './SnackBarContextProvider';

const RootContext = (props) => {
  const { children } = props;
  return (
    <>
      <SnackBarContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </SnackBarContextProvider>
    </>
  );
};

export default RootContext;
