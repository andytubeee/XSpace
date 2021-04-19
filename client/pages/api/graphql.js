const { ApolloServer, gql } = require('apollo-server');
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen.then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

export const config = {
    api: {
        bodyParser: false
    }
};

// export default apolloServer.createHandler({ path: "/api/graphql" });