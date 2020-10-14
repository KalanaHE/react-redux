import React from "react";

import { useDispatch } from "react-redux";
import allActions from "../actions";

const TextBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          dispatch(allActions.text.textchange(e.target.value));
        }}
      />
    </div>
  );
};

export default TextBox;
