import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import UsersServices from "../../services/users.services";
export default function Register() {
  const { id } = useParams();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { singup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let userName = e.target.userName.value;

    try {
      await singup(user.email, user.password);
      UsersServices.addUser(email, userName).then(() => {
        navigate("/");
      });
    } catch (error) {}
  };

  return (
    <div className="container-form">
      <div className="form">
        <div className="form-user">
          <form onSubmit={handleSubmit}>
            <div className="form-email">
              <div className="text-email">
                <label htmlFor="email">Email: </label>
              </div>
              <input
                type="email"
                name="email"
                placeholder="youremail@comany.ltd"
                onChange={handleChange}
              />
            </div>
            <div className="form-password">
              <div className="text-passowd">
                <label htmlFor="passowd">Passowd: </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-password">
              <div className="text-passowd">
                <label htmlFor="passowd">User Name: </label>
              </div>
              <input
                type="text"
                name="userName"
                id="userName"
                onChange={handleChange}
              />
            </div>
            <div className="button-form">
              <a href="/login" className="form-a">
                Ya tengo una cuenta{" "}
              </a>
              <button>Registrarte</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
