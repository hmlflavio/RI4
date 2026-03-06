export default class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    get estadoUpper() { return this.estado.toUpperCase(); }
    get cidadeUpper() { return this.cidade.toUpperCase(); }
}