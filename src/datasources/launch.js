const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://192.168.151.89:8000/ws-catalogo/api/';
    }

    async getAllClientes() {
        const response = await this.get('cliente' + '?text=katia');
        return Array.isArray(response.clientes.content)
            ? response.clientes.content.map(cliente => this.clienteReducer(cliente)) : [];
    }

    async searchCliente(text){
        const params = (text.args.text);
        const response = await this.get('cliente' + '?text=' + params);
        return Array.isArray(response.clientes.content)
            ? response.clientes.content.map(cliente => this.clienteReducer(cliente)) : [];
    }

    clienteReducer(cliente) {
        return {
            id: cliente.id || 0,
            nome: cliente.nome,
            municipio: cliente.municipio,
            cnpj: cliente.cnpj,
            cpf: cliente.cpf,
            estado: cliente.estado,
            bairro: cliente.bairro,
            endereco: cliente.endereco,
            cep: cliente.cep
        };
    }
}

module.exports = LaunchAPI;