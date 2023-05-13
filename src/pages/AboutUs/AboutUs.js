import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./about-us.css";
function AboutUs() {
  return (
    <>
      <Header />
      <div className="text-about">
        <div className="text-about-us">
          <h2>QUIÉNES SOMOS</h2>
        </div>
        <div className="text-explained">
          <p>
            Bienvenidos a nuestra tienda de productos agrícolas. Somos un
            establecimiento dedicado a ofrecer una amplia variedad de productos
            de origen vegetal para satisfacer las necesidades de nuestros
            clientes. Nuestra tienda está compuesta por un equipo de
            profesionales altamente capacitados y experimentados en el campo de
            la agricultura, quienes trabajan arduamente para garantizar la
            calidad y frescura de nuestros productos. Nos enorgullece trabajar
            con agricultores locales y proveedores confiables que comparten
            nuestra pasión por la agricultura sostenible y la producción
            responsable de alimentos. En nuestra tienda, encontrará una amplia
            variedad de frutas y verduras frescas, así como productos orgánicos
            y de temporada. Además, también ofrecemos una selección de productos
            agrícolas procesados, como mermeladas, conservas y salsas, todos
            ellos elaborados con los ingredientes más frescos y de alta calidad.
            En resumen, somos una tienda de productos agrícolas comprometida con
            la calidad, la frescura y la sostenibilidad. Estamos aquí para
            ofrecerle los mejores productos agrícolas posibles y para brindarle
            una experiencia de compra satisfactoria. ¡Gracias por visitarnos!
          </p>
          <br></br>
         
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutUs;
