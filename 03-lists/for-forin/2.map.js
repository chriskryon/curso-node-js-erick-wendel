const service = require('./service');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];

    for(let indice = 0; indice < this.length; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }

    return novoArrayMapeado;
}

async function main() {
    try {
        const results = await service.obterPessoas(`a`);
        
        const names1 = [];
        results.results.forEach((item) => {
            names1.push(item.name);
        })

        const names2 = results.results.map(pessoa => pessoa.name);
        console.log(names2);

        const names3 = results.results.meuMap((pessoa, indice) => {
            return pessoa.name;
        })
        console.log(names3);

    } catch (error) {
        console.log('Erro:', error);
    }
}

main();