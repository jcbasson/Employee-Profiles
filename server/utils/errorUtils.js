const _ = require("lodash");
const { errorTypes } = require("../constants/errors");

const getErrorCode = errorName => _.get(errorTypes, errorName);

module.exports = {
  getErrorCode
};
