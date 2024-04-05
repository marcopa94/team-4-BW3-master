import { GET_EXP, DELETE_EXP, ADD_EXP } from "../actions";

const initialState = {
  content: [],
};

const expReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXP:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    case DELETE_EXP:
      return {
        ...state,
        content: state.content.filter(exp => exp._id !== action.payload),
      };
    case ADD_EXP:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    default:
      return state;
  }
};

export default expReducers;
