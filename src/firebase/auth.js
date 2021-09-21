import { db, auth, FirebaseTimestamp } from "./index";

export const listenAuthState = () => {
  return new Promise(async (resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        resolve(user);
      } else {
        console.log("not get user");
        resolve();
      }
    });
  });
};

export const logout = () => {
  auth.signOut().then(() => {
    console.log("ログアウトしました");
  });
};
