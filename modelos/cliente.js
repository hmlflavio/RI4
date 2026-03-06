export default class Cliente {
    #cpf; 

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get cpf() { return this.#cpf; }
    get nomeUpper() { return this.nome.toUpperCase(); }
    get nomeLower() { return this.nome.toLowerCase(); }
}