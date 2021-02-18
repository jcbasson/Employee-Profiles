const query = require("./queries");
const graphql = require("graphql");
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query
});
