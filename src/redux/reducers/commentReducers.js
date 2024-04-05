import { GET_COMMENTS } from "../actions";

const initialState = {
  content: [],
};

const commentReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };

    default:
      return state;
  }
};

export default commentReducers;
