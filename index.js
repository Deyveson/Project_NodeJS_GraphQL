const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schemas/schema');

const resolvers = require('./src/resolvers/resolver');

const LaunchAPI = require('./src/datasources/launch');
const UserAPI = require('./src/datasources/user');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        launchAPI: new LaunchAPI(),
    })
});

server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`);
});
