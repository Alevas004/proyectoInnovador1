import './AboutUs.css'

import aboutus from "../../img/aboutus.jpg"

const AboutUs = () => {


  return (

    <article className="aboutus__container">

    <h2>Acerca de nosotros</h2>
    <img src={aboutus} alt="" />
    <p>
    Somos una plataforma comunitaria diseñada para conectar emprendedores, administradores y usuarios, promoviendo la colaboración y el crecimiento de los emprendimientos. Nuestra misión es brindar herramientas tecnológicas que impulsen la interacción, visibilidad y éxito de las iniciativas emprendedoras en un entorno digital seguro, escalable y accesible. Creemos en el poder de las comunidades y trabajamos para fortalecerlas a través de soluciones innovadoras</p>
    
    </article>
  )
}

export default AboutUs