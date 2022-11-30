const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)

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


const usuarioPromise = obterUsuario();
// para manipular o sucesso = .then
// erros = .catch
// usuario -> telefone -> telefone
usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
        .then((result) => {
            const user = {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
            return user;
        })
    })
    .then((result) => {
        const endereco = obterEnderecoAsync(result.usuario.id);
        return endereco.then((resultado) => {
            const user = {
                usuario: result.usuario,
                telefone: result.telefone,
                endereco: resultado
            }
            return user;
        });
    })
    .then((result) => {
        console.log(`
        Nome: ${result.usuario.nome}
        Endereço: ${result.endereco.rua}, ${result.endereco.numero}
        Telefone: (${result.telefone.ddd}) ${result.telefone.telefone})
        `)
    })
    .catch((error) => {
        console.error('Deu ruim:', error);
    })

// obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 === false
//     if(error) {
//         console.log('Deu ruim em usuario', error);
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if(error1) {
//             console.log('Deu ruim em telefone', error);
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if(error2) {
//                 console.log('Deu ruim em telefone', error);
//                 return;
//             }

//             console.log(`
//             Nome: ${usuario.nome}
//             Endereço: ${endereco.rua}, ${endereco.numero}
//             Telefone: ${telefone.ddd} ${telefone.telefone}
//             `)
//         })
//     })
// })