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
    get cnpj() { 
        return this.#cnpj; 
    }
    get razaoSocialUpper() { 
        return this.razaoSocial.toUpperCase(); 
    }
    get razaoSocialLower() { 
        return this.razaoSocial.toLowerCase(); 
    }
    get nomeFantasiaUpper() { 
        return this.nomeFantasia.toUpperCase(); 
    }
    get nomeFantasiaLower() { 
        return this.nomeFantasia.toLowerCase(); 
    }
    get cnpjUpper() { 
        return this.#cnpj.toUpperCase(); 
    }
    get cnpjLower() { 
        return this.#cnpj.toLowerCase(); 
    }

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