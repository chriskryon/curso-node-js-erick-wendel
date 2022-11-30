const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    // quando der problema -> reject
    // tudo dentro dos conformes -> resolve
    return new Promise((resolve, reject) => {

        setTimeout(function() {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataDeNascimento: new Date()
            })
        }, 1000);

    })
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            return resolve({
                telefone: '123456789',
                ddd: 00
            })
        }, 1000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout( () => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);    
}

async function main() {
    try {
        console.time('medida-promisse')
        const usuario = await obterUsuario();

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[0];
        const telefone = resultado[1];

        console.log(`
            Nome: ${usuario.nome}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
        Endereço: ${endereco.rua}, ${endereco.numero}
        `);
        console.timeEnd('medida-promisse')
    } catch(error) {
        console.log("Erro:", error);
    }
}

main()