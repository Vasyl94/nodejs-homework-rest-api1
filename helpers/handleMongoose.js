const HandleMongoose = (error, data, next) => {
  const { name, code } = error;
  const status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
  error.status = status;
  next(error);
};

module.exports = HandleMongoose;