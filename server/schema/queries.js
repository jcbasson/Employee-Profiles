const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = graphql;
const _ = require("lodash");
const httpService = require("../service/httpService");
const { errorNames } = require("../constants/errors");

const CompanyInfoType = new GraphQLObjectType({
  name: "CompanyInfo",
  fields: () => ({
    companyName: { type: GraphQLString },
    companyMotto: { type: GraphQLString },
    companyEst: { type: GraphQLString }
  })
});

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLString },
    avatar: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    jobTitle: { type: GraphQLString },
    age: { type: GraphQLInt },
    bio: { type: GraphQLString },
    dateJoined: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    companyInfo: {
      type: CompanyInfoType,
      resolve: async () => {
        try {
          return await httpService.getCompanyInfo();
        } catch (error) {
          throw error.message;
        }
      }
    },
    employees: {
      type: new GraphQLNonNull(new GraphQLList(EmployeeType)),
      resolve: async () => {
        try {
          return await httpService.getEmployees();
        } catch (error) {
          throw new Error(errorNames.SERVER_ERROR);
        }
      }
    }
  })
});
module.exports = RootQuery;
