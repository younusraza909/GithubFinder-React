import React, { useReducer } from "react";
import alertContext from "../../context/alert/alertContext";
import alertReducer from "../../context/alert/alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
