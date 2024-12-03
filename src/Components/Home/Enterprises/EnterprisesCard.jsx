import UserInteraction from "../../Interaction/UserInteraction";
import "./EnterprisesCard.css";
import fofo1 from '../../../img/fofo1.jpg'

const EnterprisesCard = ({ enterprise }) => {
  return (
    <article className="container__card">
      <header className="container__post-title">
        <div className="container__title-owner">
          <div className="post__title">
            <h3>TITULO</h3>
          </div>
          <div className="post__owner-info">
            <div >
            <img src="" alt="logo compania" />
            <p>Nombre compania</p>
            </div>
            <div>
            <p>Nombre quien publica</p>
            <p>Profesion</p>
            </div>
          </div>
        </div>
      </header>
      <section className="container__info-post">
        <div className="img__post">
          <img src={fofo1} alt="img1" />
        </div>
        <div className="description__post">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis adipisci doloribus repudiandae laudantium earum nihil cum, deserunt saepe recusandae quod. Consequuntur omnis nesciunt placeat dolorem a cumque accusamus quisquam?</p>
        </div>
        <div className="interaction">
          <UserInteraction post={enterprise} />
        </div>
      </section>
    </article>
  );
};

export default EnterprisesCard;
