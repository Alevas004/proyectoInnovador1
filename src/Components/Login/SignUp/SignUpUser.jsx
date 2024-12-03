import { useEffect, useState } from "react";
import { getCitiesCo } from "../../../api/getCitiesCo";
import "./SignUpUser.css";
import { getSpeciality } from "../../../api/getSpeciality";
import { useDispatch } from "react-redux";
import axios from "axios";
import { registerUser } from "../../../store/userActions";

const SignUpUser = () => {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [explorerRole, setExplorerRole] = useState(false);
  const [entrepeneurRole, setEntrepeneurRole] = useState(false);
  const [speciality, setSpeciality] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const res = await getCitiesCo();
      setCity(res);
      const resp = await getSpeciality();
      setSpeciality(resp);
    };

    loadData();
  }, []);

  const handleSpecialityChange = (e) => {
    setSelectedSpeciality(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const TogleExplorerRole = () => {
    setExplorerRole(!explorerRole);
    setEntrepeneurRole(false);
  };
  const TogleEntrepeneurRole = () => {
    setEntrepeneurRole(!entrepeneurRole);
    setExplorerRole(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e, role) => {
    e.preventDefault();
    const url =
      role === "EXPLORER"
        ? "http://localhost:8080/explorer"
        : "http://localhost:8080/entrepreneur";

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        console.log("Registro exitoso");
        dispatch(registerUser(res.data));
      }
    } catch (error) {
      console.log("Error en el registro", error);
    }
  };

  console.log(formData);

  return (
    <article className="signup__container">
      <div>
        <h3>Formulario de Inscripción</h3>
      </div>

      <div className="toggle-buttons">
        <div>
          <button
            type="button"
            onClick={TogleExplorerRole}
            className={`toggle-button ${explorerRole ? "active" : ""}`}
          >
            EXPLORADOR
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={TogleEntrepeneurRole}
            className={`toggle-button ${entrepeneurRole ? "active" : ""}`}
          >
            EMPRENDEDOR
          </button>
        </div>
      </div>

      {/* FORM depending on ROLE */}

      {explorerRole && (
        <form onSubmit={(e) => handleSubmit(e, "EXPLORER")}>
          <section>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="text"
                id="userName"
                name="userName"
                value={formData.userName || ""}
                onChange={handleInputChange}
                required
              />
              <label className="inputGroupLabel" htmlFor="userName">
                Nombre de Usuario
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="password"
                id="password"
                name="password"
                value={formData.password || ""}
                onChange={handleInputChange}
                required
              />
              <label className="inputGroupLabel" htmlFor="password">
                Contraseña
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                required
              />
              <label className="inputGroupLabel" htmlFor="email">
                Correo Electronico
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="text"
                id="contact"
                name="contact"
                value={formData.contact || ""}
                onChange={handleInputChange}
                required
              />
              <label className="inputGroupLabel" htmlFor="contact">
                Numero de contacto
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleInputChange}
                required
              />
              <label className="inputGroupLabel" htmlFor="fullName">
                Nombre completo
              </label>
            </div>
            <div className="inputGroup">
              <select
                id="city"
                name="city"
                value={selectedCity}
                onChange={(e) => {
                  handleCityChange(e);
                  handleInputChange(e);
                }}
              >
                <option value="">Seleccione una ciudad</option>
                {city.map((c) => (
                  <option key={c.idCity} value={c.nameCity}>
                    {c.nameCity}
                  </option>
                ))}
              </select>
              <label className="inputGroupLabel" htmlFor="city">
                Ciudad
              </label>
            </div>
            <button type="submit">Registrarme</button>
          </section>
        </form>
      )}

      {entrepeneurRole && (
        <form onSubmit={(e) => handleSubmit(e, "EMPRENDEDOR")}>
          <section>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="text"
                id="userName"
                name="userName"
                value={formData.userName || ""} // *** Agregado para manejar el valor del input ***
                onChange={handleInputChange} // *** Agregado para manejar el cambio del input ***
                required
              />
              <label className="inputGroupLabel" htmlFor="userName">
                Nombre de Usuario
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="password"
                id="password"
                name="password"
                value={formData.password || ""} // *** Agregado para manejar el valor del input ***
                onChange={handleInputChange} // *** Agregado para manejar el cambio del input ***
                required
              />
              <label className="inputGroupLabel" htmlFor="password">
                Contraseña
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="email"
                id="email"
                name="email"
                value={formData.email || ""} // *** Agregado para manejar el valor del input ***
                onChange={handleInputChange} // *** Agregado para manejar el cambio del input ***
                required
              />
              <label className="inputGroupLabel" htmlFor="email">
                Correo Electronico
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="text"
                id="contact"
                name="contact"
                value={formData.contact || ""} // *** Agregado para manejar el valor del input ***
                onChange={handleInputChange} // *** Agregado para manejar el cambio del input ***
                required
              />
              <label className="inputGroupLabel" htmlFor="contact">
                Numero de contacto
              </label>
            </div>
            <div className="inputGroup">
              <input
                className="inputGroupInput"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName || ""} // *** Agregado para manejar el valor del input ***
                onChange={handleInputChange} // *** Agregado para manejar el cambio del input ***
                required
              />
              <label className="inputGroupLabel" htmlFor="fullName">
                Nombre completo
              </label>
            </div>
            <div className="inputGroup">
              <select
                id="speciality"
                name="speciality" // *** Agregado name para manejar el cambio ***
                value={selectedSpeciality} // *** Agregado para manejar el valor del select ***
                onChange={(e) => {
                  handleSpecialityChange(e);
                  handleInputChange(e); // *** Agregado para manejar el cambio del input ***
                }}
              >
                <option value="">Seleccione una especialidad</option>
                {speciality.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label className="inputGroupLabel" htmlFor="speciality">
                Especialidad
              </label>
            </div>
            <div className="inputGroup">
              <select
                id="city"
                name="city" // *** Agregado name para manejar el cambio ***
                value={selectedCity} // *** Agregado para manejar el valor del select ***
                onChange={(e) => {
                  handleCityChange(e);
                  handleInputChange(e); // *** Agregado para manejar el cambio del input ***
                }}
              >
                <option value="">Seleccione una ciudad</option>
                {city.map((c) => (
                  <option key={c.cityId} value={c.nameCity}>
                    {c.nameCity}
                  </option>
                ))}
              </select>
              <label className="inputGroupLabel" htmlFor="city">
                Ciudad
              </label>
            </div>
            <div className="inputGroup">
              <textarea
                className="xp"
                name="experience" // *** Agregado name para manejar el cambio ***
                id="experience"
                rows="4"
                cols="50"
                placeholder="Cuéntanos tu experiencia previa..."
                value={formData.experience || ""} // *** Agregado para manejar el valor del textarea ***
                onChange={handleInputChange} // *** Agregado para manejar el cambio del textarea ***
                required
              ></textarea>
              <label className="inputGroupLabel" htmlFor="experience">
                Experiencia previa
              </label>
            </div>

            <button type="submit">Registrarme</button>
          </section>
        </form>
      )}
    </article>
  );
};

export default SignUpUser;
