import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

//combine reducers helps us keep everything in order
export default combineReducers({
  location,
  animal,
  breed,
  breeds
});
