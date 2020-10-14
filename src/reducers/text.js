const text = (state = "kalana", action) => {
  switch (action.type) {
    case "TEXT_CHANGE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default text;
