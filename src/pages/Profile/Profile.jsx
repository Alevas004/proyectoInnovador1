import { useSelector } from "react-redux";

const Profile = () => {
  //Me puedo traer cualquier info almacenada en el login de la personas usando el useSelector, gracias al thunk
  const name = useSelector((store) => store.authSlice.fullName);
  const experience = useSelector((store) => store.authSlice.experience);
  const speciality = useSelector((store) => store.authSlice.speciality);
  const contact = useSelector((store) => store.authSlice.contact);
  const email = useSelector((store) => store.authSlice.email);
  const city = useSelector((store) => store.authSlice.city);

  return (
    <section>
      <div>
        <h3>{`Bienvenido ${name}`}</h3>
      </div>
      <div>
        <ul>
          <li>{contact}</li>
          <li>{email}</li>
          <li>{city}</li>
        </ul>
      </div>
      <div>
        <h4>{speciality}</h4>
        <p>{experience}</p>
      </div>
    </section>
  );
};

export default Profile;
