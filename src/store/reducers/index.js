import { LOGIN, SET_SEARCH_TERM } from "../actions/type";

export const initialState = {
  term: [],
  token: "dec3f511492ab999d9de7a1410d3a80a7ee19b0f4aa3edc4d7878cc96cb94c8e",
};

const reducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        term: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        searchResult: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
