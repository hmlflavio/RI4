//Dance_Or_Die

import Endereco from '../modelos/endereco.js';
import Telefone from '../modelos/telefone.js';
import Cliente from '../modelos/cliente.js';
import Empresa from '../modelos/empresa.js';

const endEmpresa = new Endereco('SP', 'São Paulo', 'Av Paulista', '1000');
const empresa = new Empresa('ABC LTDA', 'Mercado Online', '00.000.000/0001-00', endEmpresa);
empresa.telefones.add(new Telefone('11', '33333333'));
empresa.telefones.add(new Telefone('11', '44444444'));

const dadosClientes = [
    { nome: 'João', rua: 'Av Andrômeda', num: '987', ddd: '12', tel: '99999999' },
    { nome: 'Gabriel', rua: 'Av Andrômeda', num: '412', ddd: '12', tel: '88888888' },
    { nome: 'Barbara', rua: 'Av São João', num: '789', ddd: '12', tel: '77777777' },
    { nome: 'Márcia', rua: 'Av Andromeda', num: '452', ddd: '12', tel: '66666666' },
    { nome: 'Flávio Lins', rua: 'Av Cassiano Ricardo', num: '100', ddd: '12', tel: '55555555' }
];

dadosClientes.forEach(dados => {
    // Definindo a cidade como São José dos Campos
    const end = new Endereco('SP', 'São José dos Campos', dados.rua, dados.num);
    const cliente = new Cliente(dados.nome, '111.111.111-11', end);
    cliente.telefones.add(new Telefone(dados.ddd, dados.tel));
    cliente.telefones.add(new Telefone(dados.ddd, dados.tel)); 
    empresa.clientes.add(cliente);
});

console.log(empresa.detalhe());