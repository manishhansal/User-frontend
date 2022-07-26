import {
  LOGIN,
  GET_ALL_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./types";
import UserService from "../services/user.service";

export const login = (data) => async (dispatch) => {
  try {
    const res = await UserService.login(data);
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getAllUsers();
    dispatch({
      type: GET_ALL_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await UserService.createUser(data);
    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.updateUser(id, data);
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserService.deleteUser(id);
    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
