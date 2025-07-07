import { combineReducers } from "redux";
import model_y_reducer from "./model_y_reducer";

export default combineReducers({
  model_y: model_y_reducer
});