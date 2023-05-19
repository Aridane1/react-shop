import { useParams } from "react-router-dom";
import NovedadesServices from "../../services/novedades.services";
import { useEffect, useState } from "react";
import "./news.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function News() {
  const { id } = useParams();
  const [oneNew, setOneNew] = useState([]);

  useEffect(() => {
    let getOneNew = async () => {
      let oneNewRef = await NovedadesServices.getOneNews(id);
      const auxNew = {
        key: oneNewRef.key,
        title: oneNewRef.val().title,
        new: oneNewRef.val().new,
        img: oneNewRef.val().img,
      };
      setOneNew(auxNew);
    };

    getOneNew();
  }, [id]);

  return (
    <>
      <Header />
      <div>
        <div className="content">
          <h2>
            <p>Novedades sobre {oneNew.title}</p>
          </h2>
          <div className="content-body">
            <p className="new">{oneNew.new}</p>
            <img className="new-img" src={oneNew.img} alt="imagen" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default News;
