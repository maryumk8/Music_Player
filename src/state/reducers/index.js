import reducer from "./productReducer";
import { combineReducers } from "redux";

const Reducer = combineReducers({
  data: reducer,
});
export default Reducer;
