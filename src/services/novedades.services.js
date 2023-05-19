import { get, ref } from "firebase/database";
import database from "../firebase";

const getOneNews = (key) => {
  const newRef = ref(database, `/news/${key}`);
  return get(newRef);
};

export default {
  getOneNews,
};
