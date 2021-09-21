import { auth } from './index';

export const signIn = async (email, password, openSnackBar) => {
  const user = await auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      console.log(error);
      openSnackBar('メールアドレスかパスワードが正しくありません');
    });
  return user;
};
