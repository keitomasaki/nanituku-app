import { regexPattern } from '../utils/regexPattern';
import { db, auth, FirebaseTimestamp } from './index';

const USERS_REF = db.collection('users');

export const signUp = async (
  username,
  email,
  password,
  history,
  openSnackBar
) => {
  try {
    const confirmResult = await auth.fetchSignInMethodsForEmail(email);
    if (confirmResult.findIndex((p) => p === 'password') !== -1) {
      openSnackBar(
        'メールアドレスが登録されています。他のメールアドレスを使用してください'
      );
      return null;
    }

    const emailResult = email.match(regexPattern.EMAIL_PATTERN);
    if (emailResult === null) {
      openSnackBar('適正なメールアドレスの形式ではありません');
      return null;
    }

    const passwordResult = password.match(regexPattern.PASSWORD_PATTERN);
    if (passwordResult === null) {
      openSnackBar('パスワードは６文字以上にしてください');
      return null;
    }

    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('登録されました');
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            admin: false,
            created_at: timestamp,
            email: email,
            password: password,
            uid: uid,
            updated_at: timestamp,
            username: username,
          };

          USERS_REF.doc(uid).set(userInitialData);
          history.push('/');
        }
      });
  } catch (error) {
    console.log(error);
    openSnackBar('メールアドレスかパスワードが正しくありません');
  }
};
