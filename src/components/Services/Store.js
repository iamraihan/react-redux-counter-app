import { createStore } from "redux";
import CounterReducer from "../Reducer/CounterReducer";

const Store = createStore(CounterReducer);

export default Store;
