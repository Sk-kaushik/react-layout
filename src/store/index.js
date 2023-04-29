import { createStore } from "redux";
import { layoutReducer } from "./reducer";

const store = createStore(layoutReducer);

export default store;
