import React from "react";
const Name = (props) => {
  const { liked, character, id, dispatch } = props;

  return (
    <div>
      <h1>{character}</h1>
      <button onClick={() => dispatch({ type: TOGGLE_LIKED, payload: id })}>
        {liked ? "Liked" : "Not liked"}
      </button>
    </div>
  );
};

export default Name;
