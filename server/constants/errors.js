const errorNames = {
  SERVER_ERROR: "SERVER_ERROR"
};

const errorTypes = {
  [errorNames.SERVER_ERROR]: {
    message: "Something went wrong.",
    statusCode: 500
  }
};

module.exports = { errorTypes, errorNames };
