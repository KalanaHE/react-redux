import React from "react";
import { useSelector } from "react-redux";

const ViewTextInput = () => {
  const text = useSelector((state) => state.text);
  return (
    <div>
      <h4>{text}</h4>
    </div>
  );
};

export default ViewTextInput;
