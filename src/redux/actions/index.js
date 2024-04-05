// const jwt =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMDFkMGY5NGY0YTAwMTkzNzkxNjUiLCJpYXQiOjE3MTIxMjg0NjQsImV4cCI6MTcxMzMzODA2NH0.rrAz-vY_R1pN6Zjj9pjzUoV5PUAFIOfYKwZONwGTEzo";

// const jwt =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBmYTMyODQyNzA1NTAwMTk1MTVmNmEiLCJpYXQiOjE3MTIzMDA4NDAsImV4cCI6MTcxMzUxMDQ0MH0.oK6iBeAZ9_mn1mFxFmPAyzbppT83R_7kpolneoaVOQU";

const jwtComment =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWJiNjRjNTllYzAwMTk5MGQ2ZjYiLCJpYXQiOjE3MTIzMDIyODYsImV4cCI6MTcxMzUxMTg4Nn0.B0Z4Hq3CXyCas-EhkryGJGoZXl1NU07UfVHlwcBIY7M";

export const GET_USER = "GET_USER";
export const GET_EXP = "GET_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const ADD_EXP = "ADD_EXP";
export const GET_POSTS = "GET_POSTS";
export const GET_COMMENTS = "GET_COMMENTS";
export const CHANGE_JWT = "CHANGE_JWT";

export const changeJwt = jwt => ({
  type: CHANGE_JWT,
  payload: jwt,
});

export const deleteExp = expId => ({
  type: DELETE_EXP,
  payload: expId,
});

export const addExp = expId => ({
  type: ADD_EXP,
  payload: expId,
});

export const getFetchUser = jwt => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      method: "GET",
      headers: {
        Authorization: jwt,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then(data => {
        dispatch({
          type: GET_USER,
          payload: data,
        });
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };
};

export const getFetchExp = (userId, jwt) => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      method: "GET",
      headers: {
        Authorization: jwt,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then(data => {
        dispatch({
          type: GET_EXP,
          payload: data,
        });
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };
};

export const getFetchPosts = jwt => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "GET",
      headers: {
        Authorization: jwt,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then(data => {
        dispatch({
          type: GET_POSTS,
          payload: data,
        });
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };
};

export const getFetchComments = jwt => {
  return (dispatch, useState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "GET",
      headers: {
        Authorization: jwtComment,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then(data => {
        dispatch({
          type: GET_COMMENTS,
          payload: data,
        });
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };
};
