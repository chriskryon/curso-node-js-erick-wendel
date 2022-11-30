const { obterPessoas } = require('./service');

Array.prototype.meuReduce = function(callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

    for(let index = 0; index <= this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this);
    }
    return valorFinal;
}

async function main() {
    try {
        const { 
            results 
        } = await obterPessoas(`a`);

        const pesos = results
            .map((item) => parseInt(item.height))
            .reduce((previous, current) => {
                return previous + current
            }, 0);
        console.log(pesos);

        console.log('---');

        const minhaLista = [
            ['Erick', 'Wendel'],
            ['NodeBR', 'Nerdzão']
        ];

        const total = minhaLista.meuReduce((anterior, proximo) => {
                return anterior.concat(proximo);
            }, [])
            .join(', ');
        
        console.log(total);

    } catch (error) {
        console.log('Error:', error);
    }
}

main();