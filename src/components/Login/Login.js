import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./login.css";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-form">
      <div className="container-error">{error && <p>{error}</p>}</div>
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
            <div className="button-form">
              <a href="/register" className="form-a">
                No tengo una cuenta
              </a>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
