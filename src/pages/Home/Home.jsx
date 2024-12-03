import "./Home.css";
import { useGetEnterprises } from "../../hooks/queries/useGetEnterprises";
import EnterprisesCard from "../../Components/Home/Enterprises/EnterprisesCard";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  //useQuery solo se usa para hacer peticiones de tipo get
  const { data, isLoading, isError } = useGetEnterprises();
  const [isModalOpen, setIsModalOpen] = useState(false);

  //*usar esta validacion con el back
  // const userValidation = useSelector((store)=> store.authSlice.roles)
  // const openModal = () => {
  //   if (userValidation === 'ENTREPRENEUR'){
  //     setIsModalOpen(true)
  //   } else {alert("Solo los emprendedores y administradores pueden realizar publicaciones")}
  // }
  //! manera sin usar Query tanks
  /* useEffect(()=>{

      const loadingEnterprises = async () => {
        const res = await getEnterprises()
        return res.data
      }

      loadingEnterprises()
  }, []) */

  //! Logica para hacer la validacion offline de las publicaciones
  const well = "ENTREPRENEUR";
  const not = "EXPLORER";

  const openModal = () => {
    if (not === "ENTREPRENEUR") {
      setIsModalOpen(true);
    } else {
      alert(
        '"Solo los emprendedores y administradores pueden realizar publicaciones"'
      );
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home__back">
      <div className="home__card">
        <h4>¡Explora, conecta y haz crecer tus ideas!</h4>
        <p>
          Descubre emprendimientos increíbles, eventos destacados y una
          comunidad llena de oportunidades. Aquí, cada clic te acerca a tus
          metas y a personas que comparten tu pasión.
        </p>
        <ul>
          <li>🎯 Publica tus proyectos</li>
          <li>🎉 Promociona tus eventos</li>
          <li>🤝 Conecta con aliados estratégicos</li>
        </ul>
        <p>¡Bienvenido a tu espacio para crecer y triunfar! 🌟</p>

        <button type="button" onClick={openModal} className="">
          {" "}
          PUBLICAR{" "}
        </button>
      </div>

      {isLoading && <p>Loading enterprises...</p>}
      {!isLoading && isError && <p>Opps, something is wrong</p>}
      {!isLoading && !isError && <EnterprisesCard enterprise={data} />}

      {/* // LOGICA PARA PUBLICACIONES VISIBLE SOLO PARA EMPRENDEDORES */}

      {isModalOpen && (
        <div className="modal">
          {" "}
          <div className="modal-content">
            {" "}
            <span className="close" onClick={closeModal}>
              &times;
            </span>{" "}
            <h2>Nueva Publicación</h2>{" "}
            <form>
              {" "}
              <div>
                {" "}
                <label htmlFor="postTitle">
                  Título de la Publicación:
                </label>{" "}
                <input type="text" id="postTitle" name="postTitle" required />{" "}
              </div>{" "}
              <div>
                {" "}
                <label htmlFor="postContent">
                  Contenido de la Publicación:
                </label>{" "}
                <textarea
                  id="postContent"
                  name="postContent"
                  rows="4"
                  cols="50"
                  required
                ></textarea>{" "}
              </div>{" "}
              <button type="submit">Publicar</button>{" "}
            </form>{" "}
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
