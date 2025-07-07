import {
  SELECTED_EXTERIOR_COLOUR,
  SELECTED_INTERIOR_COLOUR,
  SELECTED_WHEEL_TYPE,
  SELECTED_FULL_SELF_DRIVING,
  SELECTED_PERFORMANCE_PACKAGE,
  SELECTED_CENTER_CONSOLE_TRAYS,
  SELECTED_SUNSHADE,
  SELECTED_ALL_WEATHER_INTERIOR_LINERS,
  UPDATE_DOWN_PAYMENT,
  UPDATE_MONTHLY_PAYMENT,
  UPDATE_LOAN_AMOUNT,
  UPDATE_TIME,
} from "./types";

import instance from "../utils/axios";

export const select_exterior_colour = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_EXTERIOR_COLOUR,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const select_interior_colour = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_INTERIOR_COLOUR,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const select_wheel_type = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_WHEEL_TYPE,
      payload: id,
    });
    dispatch({
      type: UPDATE_DOWN_PAYMENT,
    });
    dispatch({
      type: UPDATE_LOAN_AMOUNT,
    });
    dispatch({
      type: UPDATE_MONTHLY_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const select_full_self_driving = () => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_FULL_SELF_DRIVING,
    });
    dispatch({
      type: UPDATE_DOWN_PAYMENT,
    });
    dispatch({
      type: UPDATE_LOAN_AMOUNT,
    });
    dispatch({
      type: UPDATE_MONTHLY_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const select_performance_package = () => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_PERFORMANCE_PACKAGE,
    });
    dispatch({
      type: UPDATE_DOWN_PAYMENT,
    });
    dispatch({
      type: UPDATE_LOAN_AMOUNT,
    });
    dispatch({
      type: UPDATE_MONTHLY_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const select_center_console_trays = () => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_CENTER_CONSOLE_TRAYS,
    });
    dispatch({
      type: UPDATE_DOWN_PAYMENT,
    });
    dispatch({
      type: UPDATE_LOAN_AMOUNT,
    });
    dispatch({
      type: UPDATE_MONTHLY_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const select_sunshade = () => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_SUNSHADE,
    });
    dispatch({
      type: UPDATE_DOWN_PAYMENT,
    });
    dispatch({
      type: UPDATE_LOAN_AMOUNT,
    });
    dispatch({
      type: UPDATE_MONTHLY_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const select_all_weather_interior_liners = () => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_ALL_WEATHER_INTERIOR_LINERS,
    });
    dispatch({
      type: UPDATE_DOWN_PAYMENT,
    });
    dispatch({
      type: UPDATE_LOAN_AMOUNT,
    });
    dispatch({
      type: UPDATE_MONTHLY_PAYMENT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const update_time = () => async (dispatch) => {
  try {
    const res = await instance.get("/time");
    dispatch({
      type: UPDATE_TIME,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
