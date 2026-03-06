export default class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() { return this.#cnpj; }

    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n`;
        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.nome}\nEstado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
            cliente.telefones.forEach(tel => {
                descricao += `ddd: ${tel.ddd} numero: ${tel.numero}\n`;
            });
        });
        return descricao;
    }
}