import axios from "axios";
import {
  ADD_TO_FAVOURITE_FAILURE,
  ADD_TO_FAVOURITE_REQUEST,
  ADD_TO_FAVOURITE_SUCCESS,
  GET_USER_FAILURE,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS
} from "./ActionType";
import { API_URL, api } from "../../config/api";

export const registerUser = (reqData) => async (dispatch) => {
    console.log(reqData)
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${API_URL}/signup`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    console.log("register", data);
  } catch (error) {
    dispatch({type:REGISTER_FAILURE,payload:error})
    console.log(error);
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_URL}/signin`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    console.log("login", data);
  } catch (error) {
    dispatch({type:LOGIN_FAILURE,payload:error})
    console.log(error);
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST })
  try {
    const { data } = await api.get(`/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("user profile", data);
    
  } catch (error) {
    const errorMessage = error.message;
    dispatch({type:GET_USER_FAILURE,payload:errorMessage})
    
  }
};

export const addToFavourite = (jwt, restaurantId) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVOURITE_REQUEST });
  try {
    console.log("restaurant ID", restaurantId)
    const { data } = await api.put(
      `/api/restaurants/${restaurantId}/add-favourites`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    dispatch({ type: ADD_TO_FAVOURITE_SUCCESS, payload: data });
    console.log("user profile", data);
  } catch (error) {
    dispatch({type:ADD_TO_FAVOURITE_FAILURE,payload:error})
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    console.log("log out success");
  } catch (error) {

    console.log(error);
  }
};
