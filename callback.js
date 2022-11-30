function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataDeNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            telefone: '123456789',
            ddd: 00
        })
    }, 1000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout( () => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);    
}

function resolverUsuario(erro, usuario) {
    console.log('Usuário: ' + usuario);

}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
    if(error) {
        console.log('Deu ruim em usuario', error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.log('Deu ruim em telefone', error);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
                console.log('Deu ruim em telefone', error);
                return;
            }

            console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: ${telefone.ddd} ${telefone.telefone}
            `)
        })
    })
})