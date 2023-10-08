import { createStore } from 'redux'
import AppReducer from "../reducers/reducers";

const store = createStore(AppReducer);

export default store;
