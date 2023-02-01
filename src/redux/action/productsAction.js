import { PRODUCT } from "./loginReducer";

export const productsAction = (productsData, dispatch) => {
  dispatch({
    type: PRODUCT,
    payload: productsData,
  });
};
