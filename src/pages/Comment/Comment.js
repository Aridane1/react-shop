import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CommentsServices from "../../services/comments.services";
import UsersServices from "../../services/users.services";

import "./comment.css";

import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";

function Comment() {
  const [userName, setUserName] = useState();
  const [comments, setComments] = useState([]);

  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameUser = e.target.userName.value;
    let comment = e.target.comment.value;

    CommentsServices.addComment(nameUser, comment).then(() => {
      getAllComments();
      document.getElementById("form-add").childNodes[0].comment.value = "";
    });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    let key = e.target.key.value;
    let comment = e.target.comment.value;

    CommentsServices.updateComment(key, comment, userName).then(() => {
      getAllComments();
    });

    document.getElementsByClassName("container-form-add")[0].style.display =
      "block";

    document.getElementsByClassName("container-form-update")[0].style.display =
      "none";
  };

  const getUser = () => {
    UsersServices.getUserName().then((data) => {
      let auxNameUser = "";
      data.forEach((item) => {
        if (item.val().email === user.email) {
          auxNameUser = item.val().userName;
        } else {
        }
      });
      setUserName(auxNameUser);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = () => {
    CommentsServices.getAllComments().then((data) => {
      let auxComment = [];
      data.forEach((item) => {
        auxComment.push({
          key: item.key,
          userName: item.val().userName,
          comment: item.val().comment,
        });
        setComments(auxComment);
      });
    });
  };

  const deleteComment = (key) => {
    CommentsServices.deleteComment(key).then(() => {
      getAllComments();
    });
  };

  const putCommentInForm = (key) => {
    const form = document.getElementById("form-update").childNodes[0];
    CommentsServices.getComment(key).then((data) => {
      form.comment.value = data.val().comment;
      form.key.value = data.key;
    });

    document.getElementsByClassName("container-form-add")[0].style.display =
      "none";

    document.getElementsByClassName("container-form-update")[0].style.display =
      "block";
  };

  const showComments = () => {
    return comments.map((c) => {
      return (
        <div className="comment" key={c.key}>
          <div className="name-user-comment">
            <label>{c.userName}</label>
          </div>
          <div className="comment-text">
            <textarea className="comment-text-area" disabled>
              {c.comment}
            </textarea>
          </div>
          {userName === c.userName ? (
            <div className="container-btn-remove-update-comment">
              <button onClick={() => deleteComment(c.key)}>Eliminar</button>
              <button onClick={() => putCommentInForm(c.key)}>
                Actualizar
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      <p>
        <h2>Comentarios</h2>
      </p>
      <div className="container">
        <div className="container-form-add">
          <div className="form" id="form-add">
            <form onSubmit={handleSubmit}>
              <div className="user-name">
                <label>User Name:</label>
              </div>
              <div className="user-name">
                <input
                  disabled
                  type="text"
                  name="userName"
                  id="userName"
                  value={userName}
                />
              </div>

              <div className="form-comment">
                <div className="form-name-label">
                  <label>Comentario:</label>
                </div>
                <div>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Escribe tu comentario"
                  />
                </div>
              </div>
              <div className="form-button">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>

        <div className="container-form-update">
          <div className="form" id="form-update">
            <form onSubmit={handleSubmitUpdate}>
              <div className="user-name">
                <label>User Name</label>
              </div>
              <input
                disabled
                type="text"
                name="userName"
                id="userName"
                value={userName}
              />
              <input hidden name="key" id="key" />
              <div className="form-comment">
                <div className="form-name-label">
                  <label>Comentario:</label>
                </div>
                <div>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Escribe tu comentario"
                  />
                </div>
              </div>
              <div className="form-button">
                <button type="submit">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="container-show-comment">{showComments()}</div>
      </div>
      <Footer />
    </>
  );
}

export default Comment;
