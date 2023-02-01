export const PRODUCT = "PRODUCT";

const fetchProducts = async () => {
  const res = await fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
  );
  const resObj = await res.json();
  return resObj.data;
};

const productsData = fetchProducts();

const initState = productsData
  ? productsData
  : {
      data: [],
    };

const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODUCT: {
      return {
        ...state,
        data: payload.data,
      };
    }

    default:
      return state;
  }
};
export default productsReducer;
