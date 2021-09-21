import { db, auth, FirebaseTimestamp } from "./index";

const USERS = "users";

export const getUserData = async (uid) => {
  const USERS_REF = db.collection(USERS).doc(uid);
  const userDoc = await USERS_REF.get();
  if (userDoc.exists) {
    return userDoc.data();
  }
};
