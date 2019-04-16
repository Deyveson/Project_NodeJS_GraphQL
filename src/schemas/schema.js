const { gql } = require('apollo-server');

const typeDefs = gql`
type Cliente {
    id: ID!
    nome: String!
    municipio: String!
    cnpj: Int!
    cpf: Int!
    estado: String!
    bairro: String!
    endereco: String!
    cep: Int!
}
type Query {
    clientes: [Cliente]
    allCliente: [Cliente!]!
}

type Mutation{
    getCliente(text: String!): [Cliente!]!
}
`;
module.exports = typeDefs;