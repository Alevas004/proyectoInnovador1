import "./Contact.css";

const Contact = () => {
  return (
    <article className="contact__container">
      <h2>Contactanos</h2>
      <div className="cards__container">
        <div className="contact__card">
        <h3><b>Medellin</b></h3>
          <p><b>Correo: </b>infomedellin@vce.com</p>
          <p><b>Direccion: </b>Carrera 70 # 34-10, Edificio Granada, Medellín, Antioquia</p>
          <p> <b>Telefono: </b>(604) 567 8901</p>

          <button>
            <a href="https://api.whatsapp.com/send/?phone=573128363155&text=Hola+quiero+ser+distribuidor.&type=phone_number&app_absent=0"></a>
            Whatsapp
          </button>
        </div>
        <div className="contact__card">
          <h3><b>Sucre </b></h3>
          <p><b>Correo: </b>infosucre@vce.com</p>
          <p><b>Direccion: </b>Calle 6 # 8-45, Sucre, Sucre</p>
          <p> <b>Telefono: </b>(605) 442 6769 </p>

          <button>
            <a href="https://api.whatsapp.com/send/?phone=573128363155&text=Hola+quiero+ser+distribuidor.&type=phone_number&app_absent=0"></a>
            Whatsapp
          </button>
        </div>
        <div className="contact__card">
        <h3><b>Bogota</b></h3>
          <p><b>Correo: infobogota@vce.com</b></p>
          <p><b>Direccion: </b>Calle 45 # 18-32, Piso 3, Bogotá, Cundinamarca</p>
          <p> <b>Telefono: </b>(601) 234 5678 </p>

          <button>
            <a href="https://api.whatsapp.com/send/?phone=573128363155&text=Hola+quiero+ser+distribuidor.&type=phone_number&app_absent=0"></a>
            Whatsapp
          </button>
        </div>
      </div>
    </article>
  );
};

export default Contact;
