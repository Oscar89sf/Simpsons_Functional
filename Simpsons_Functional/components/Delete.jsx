import React from "react";

import { connect } from "react-redux";
import { DELETE_CHARACTER } from "../redux/types";
const Delete = (props) => {
  const { id, dispatch } = props;

  return (
    <div>
      <button onClick={() => dispatch({ type: DELETE_CHARACTER, payload: id })}>
        Delete
      </button>
    </div>
  );
};

export default Delete;
