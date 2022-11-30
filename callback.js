function obterUsuario() {
    setTimeout(function() {
        return {
            id: 1,
            nome: 'Aladin',
            dataDeNascimento: new Date()
        }
    }, 1000);
}

function obterTelefone(idUsuario) {
    setTimeout(function() {
        return {
            telefone: '123456789',
            ddd: 00
        }
    }, 1000);
}

function obterEndereco(idUsuario) {

}

function resolverUsuario(erro, usuario) {
    console.log('Usuário: ' + usuario);

}

obterUsuario(resolverUsuario)