import axios from "axios";
import { API_URL } from "../../helpers/ApiUrl";

export const LoginAction = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const datauser = await axios.post(`${API_URL}/auth/login`, {
        username: username,
        password: password,
      });
      localStorage.setItem("data", JSON.stringify(datauser.data));
      dispatch({ type: "LOGIN", payload: datauser.data });
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const RegisterAction = ({ username, email, password }) => {
  return async (dispatch) => {
    try {
      const datauser = await axios.post(`${API_URL}/auth/register`, {
        username: username,
        password: password,
      });
      localStorage.setItem("data", JSON.stringify(datauser.data));
      dispatch({ type: "LOGIN", payload: datauser.data });
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
