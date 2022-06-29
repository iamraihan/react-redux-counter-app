import { deCrease, inCrease, reset } from "../Reducer/Constance";

export const IncreaseCounter = () => {
  return {
    type: inCrease,
  };
};
export const DecreaseCounter = () => {
  return {
    type: deCrease,
  };
};
export const Reset = () => {
  return {
    type: reset,
  };
};
