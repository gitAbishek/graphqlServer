import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    greet: String
  }
`;

const resolvers = {
  Query: {
    greet: () => {
      return "Hello world";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server
  .listen()
  .then(({ url }) => {
    console.log(`server ready at ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
