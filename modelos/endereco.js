export default class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    get estadoUpper() { return this.estado.toUpperCase(); }
    get estadoLower() { return this.estado.toLowerCase(); }

    get cidadeUpper() { return this.cidade.toUpperCase(); }
    get cidadeLower() { return this.cidade.toLowerCase(); }

    get ruaUpper() { return this.rua.toUpperCase(); }
    get ruaLower() { return this.rua.toLowerCase(); }

    get numeroUpper() { return this.numero.toUpperCase(); }
    get numeroLower() { return this.numero.toLowerCase(); }
}