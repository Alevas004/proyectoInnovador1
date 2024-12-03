import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/auth/login";
import { REGISTER_USER } from "../userActions";
REGISTER_USER;

const emptyState = {
  id: "",
  token: "",
  fullName: "",
  email: "",
  username: "",
  experience: "",
  contact: "",
  speciality: "",
  city: "",
  roles: "",
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  //el JSON.parse() me devuelve el string de json en objeto nuevamente. Lo contrario a stringify
  initialState: JSON.parse(localStorage.getItem("sessionData")) ?? emptyState,
  reducers: {
    updateUserData(state, action) {
      const newUserData = action.payload;

      state.id = newUserData.id;
      state.fullName = newUserData.fullName;
      state.email = newUserData.email;
      state.username = newUserData.username;
      state.experience = newUserData.experience;
      state.contact = newUserData.contact;
      state.speciality = newUserData.speciality;
      state.city = newUserData.city;
      state.roles = newUserData.roles;

      //aca guardamos la sesion del usuario en el local storage
      localStorage.setItem("sessionData", JSON.stringify({ ...state }));
    },
    updateToken(state, action) {
      const newToken = action.payload;

      state.token = newToken;
      localStorage.setItem("sessionData", JSON.stringify({ ...state }));
    },

    startSession(state) {
      state.isLogged = true;
      localStorage.setItem("sessionData", JSON.stringify({ ...state }));
    },

    reset() {
      localStorage.removeItem("sessionData");
      return emptyState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REGISTER_USER, (state, action) => {
      const newUserData = action.payload;
      state.id = newUserData.id;
      state.fullName = newUserData.fullName;
      state.email = newUserData.email;
      state.username = newUserData.username;
      state.experience = newUserData.experience;
      state.contact = newUserData.contact;
      state.specialty = newUserData.specialty;
      state.city = newUserData.city;
      localStorage.setItem("sessionData", JSON.stringify({ ...state }));
    });
  },
});

export const { updateUserData, reset, startSession, updateToken } =
  authSlice.actions;

export const startSessionThunk =
  ({ email, password }) =>
  async (dispatch) => {
    const sessionData = await login({ email, password });

    const userData = {
      id: sessionData.user.id,
      fullName: `${sessionData.user.firstName} ${sessionData.user.lastName}`,
      email: sessionData.user.email,
    };
    dispatch(updateUserData(userData));
    dispatch(updateToken(sessionData.token));
    dispatch(startSession());
  };

export default authSlice.reducer;
