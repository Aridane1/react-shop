import { get, push, ref } from "firebase/database";
import database from "../firebase";

const usersRef = ref(database, "/users");

const getUserName = () => {
  return get(usersRef);
};

const addUser = (email, userName) => {
  return push(usersRef, {
    email: email,
    userName: userName,
  });
};

export default { getUserName, addUser };
