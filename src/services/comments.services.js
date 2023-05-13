import { get, push, ref, remove, update } from "firebase/database";
import database from "../firebase";

const commentsRef = ref(database, "/comments");

const getAllComments = () => {
  return get(commentsRef);
};

const getComment = (key) => {
  const commentRef = ref(database, `/comments/${key}`);
  return get(commentRef);
};

const addComment = (userName, comment) => {
  return push(commentsRef, {
    userName: userName,
    comment: comment,
  });
};

const deleteComment = (key) => {
  const commentToDeleteRef = ref(database, `/comments/${key}`);
  return remove(commentToDeleteRef);
};

const updateComment = (key, comment, userName) => {
  const commentToUpdateRef = ref(database, `/comments/${key}`);

  return update(commentToUpdateRef, {
    comment: comment,
    userName: userName,
  });
};

export default {
  getAllComments,
  addComment,
  deleteComment,
  getComment,
  updateComment,
};
