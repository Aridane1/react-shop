import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import { useAuth } from "../../context/authContext";
import UsersServices from "../../services/users.services";
import { useState } from "react";

function Home() {
  const [userName, setUserName] = useState();
  const { user } = useAuth();

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

  const checkUser = () => {
    if (user === null) {
      return "Bienvenido";
    } else {
      getUser();
      return `Bienvenid@ ${userName}`;
    }
  };

  return (
    <>
      <Header />
      <div className="text-home">
        <div className="text-inicio">
          <h2>{checkUser()}</h2>
        </div>
        <div className="text-explained">
          <p>
            ¡{checkUser()} a nuestra página web dedicada al comercio de
            productos agrícolas!
          </p>
          <br></br>

          <p>
            En este sitio, encontrarás una amplia variedad de productos frescos
            y de alta calidad, directamente de los campos de los agricultores
            locales. Desde frutas y verduras de temporada, hasta granos y
            cereales, nos esforzamos por ofrecer los mejores productos para
            satisfacer tus necesidades.
          </p>
          <br></br>

          <p>
            Nos enorgullece trabajar en estrecha colaboración con los
            agricultores de la región, para asegurarnos de que cada producto que
            ofrecemos sea cultivado y cosechado de manera sostenible y
            respetuosa con el medio ambiente. Además, nuestro compromiso con la
            calidad y la seguridad alimentaria garantiza que cada producto que
            vendemos cumple con los más altos estándares.
          </p>
          <br></br>

          <p>
            Nuestra página web es fácil de usar y te permitirá hacer tus compras
            de manera conveniente y segura. Desde la comodidad de tu hogar o tu
            lugar de trabajo, podrás hacer tus pedidos en línea y recibirlos
            directamente en la puerta de tu casa o lugar de trabajo. Además,
            ofrecemos precios competitivos y promociones especiales para que
            puedas disfrutar de los mejores productos a precios asequibles.
          </p>
          <br></br>

          <p>
            Gracias por elegir nuestra página web como tu proveedor de productos
            agrícolas. ¡Esperamos poder servirte pronto y ofrecerte los mejores
            productos frescos y de alta calidad!
          </p>
          <br></br>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
