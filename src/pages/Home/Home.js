import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="text-home">
        <div className="text-inicio">
          <h2>INICIO</h2>
        </div>
        <div className="text-explained">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eros nisi, ultrices a pharetra at, finibus sit amet nulla.
            Vestibulum suscipit dignissim mauris id suscipit. Proin id lacus vel
            urna semper vehicula in vel ante. Nunc non tellus a arcu
            pellentesque vulputate. Proin faucibus tempus erat sit amet
            eleifend. Vivamus vitae tincidunt quam. In scelerisque risus vel
            congue rutrum. In quis ultrices nunc. Quisque sed mi ex. Donec non
            lacus lorem. Vivamus urna sapien, cursus quis magna eu, finibus
            auctor ante. Proin ornare vehicula nunc, sit amet facilisis nulla
            viverra bibendum. Sed iaculis imperdiet ipsum at interdum. Vivamus
            erat nisl, lobortis nec feugiat vitae, mattis non odio. Sed laoreet
            sem ipsum, ac efficitur justo venenatis a.
          </p>
          <br></br>
          <p>
            Mauris non consectetur erat. Nam consequat libero id est
            pellentesque pellentesque. Praesent et ultrices augue, ut sodales
            mi. Donec lobortis gravida ligula quis vestibulum. Aenean ut leo
            malesuada, dictum odio sed, sollicitudin quam. Fusce eget enim
            mauris. Integer suscipit sem vel venenatis volutpat. Vestibulum
            scelerisque nisi lacus, at varius diam convallis non. Ut sit amet
            dolor urna. Duis vitae commodo magna. Etiam libero augue, gravida et
            nisl imperdiet, egestas fringilla turpis. Proin in ultrices nibh.
            Mauris arcu leo, lacinia gravida varius id, gravida semper augue.
            Quisque suscipit consectetur lectus, a aliquet dolor aliquet ut.
            Quisque et sapien eu lorem egestas fermentum. Suspendisse lacinia,
            ipsum at varius tempor, diam libero interdum dui, at aliquam mi arcu
            ac arcu.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
