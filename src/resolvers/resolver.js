module.exports = {
    Query: {
        allCliente: async (_, __, { dataSources }) =>
            dataSources.launchAPI.getAllClientes(),
    },
    Mutation: {
        getCliente: async (parent, args, {dataSources}) => {
            const cliente = Object.assign({args});
            return dataSources.launchAPI.searchCliente(cliente);
        }
    }
};