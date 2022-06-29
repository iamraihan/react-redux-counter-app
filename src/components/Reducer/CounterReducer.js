import { deCrease, inCrease, reset } from "./Constance";

const initialState = {
  count: 0,
};
const CounterReducer = (state = initialState, action) => {
  if (action.type === inCrease)
    // use switch best for this.
    return {
      ...state,
      count: state.count + 1,
    };
  if (action.type === deCrease)
    return {
      ...state,
      count: state.count - 1,
    };
  if (action.type === reset)
    return {
      ...state,
      count: 0,
    };
  return state;
};

export default CounterReducer;
