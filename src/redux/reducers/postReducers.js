import { GET_POSTS } from "../actions";

const initialState = {
  content: [],
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };

    default:
      return state;
  }
};

export default postReducers;
