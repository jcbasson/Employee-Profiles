const axios = require("axios");
const _ = require("lodash");

const API_ENDPOINT = "http://localhost:3000";

const getCompanyInfo = () =>
  new Promise((resolve, reject) =>
    axios
      .get(`${API_ENDPOINT}/companyInfo`)
      .then(response => resolve(_.get(response, "data")))
      .catch(error => {
        reject(error);
      })
  );

const getEmployees = () =>
  new Promise((resolve, reject) =>
    axios
      .get(`${API_ENDPOINT}/employees`)
      .then(response => resolve(_.get(response, "data")))
      .catch(error => {
        reject(error);
      })
  );

module.exports = {
  getCompanyInfo,
  getEmployees
};
