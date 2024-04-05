import { CHANGE_JWT, GET_USER } from "../actions";

const initialState = {
  user: {},
  jwtCurrent:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo",
};

const profiloReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CHANGE_JWT:
      return {
        ...state,
        jwtCurrent: action.payload,
      };

    default:
      return state;
  }
};

export default profiloReducer;
