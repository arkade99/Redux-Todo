const log = (store) => (next) => (action) => {
  console.log("MiddlewareAction:", action);

  next(action);
};

export default log;
