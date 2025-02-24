const error = (store) => (next) => (action) => {
  if (action.type === "Show_Error") {
    console.log("MiddlewareAction:", action.payload.error);
  } else {
    next(action);
  }
};

export default error;
