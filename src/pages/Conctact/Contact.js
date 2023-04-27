import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./contact.css";

function Contact() {
  
  const addReason = (event) => {
    event.preventDefault();
    let reasonData = event.target;
    let newReason = {
      title: reasonData["email"].value,
      review: reasonData["reason"].value,
    };
    alert(newReason);
  };

  return (
    <>
      <Header />
      <div className="contact">
        <p>
          <h2>Contactanos</h2>
        </p>
        <div className="form-contact">
          <form className="form">
            <p>Correo electrónico: </p>
            <p>
              <input
                type="text"
                id="email"
                placeholder="Introduzca su correo"
                name="email"
              />
            </p>
            <p>Motivo por el cual nos contacta: </p>
            <p>
              <input
                type="text"
                id="reason"
                placeholder="Motivo"
                name="reason"
              ></input>
            </p>
            <p>
              <button type="submit">Enviar Motivo</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
