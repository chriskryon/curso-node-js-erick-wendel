const { obterPessoas } = require('./service');

Array.prototype.meuFilter = function(callback) {
    const lista = [];
    for(index in this) {
        const item = this[index];
        const resultado = callback(item, index, this);

        // 0 "" null undefined
        if (!resultado) continue;
        lista.push(item);
    }
    return lista;
}

async function main() {
    try {
        const { 
            results 
        } = await obterPessoas('a');

        const familiaLars = results.filter((item) =>
            item.name.toLowerCase().indexOf(`lars`) !==  - 1);
        const names = familiaLars.map((pessoa) => pessoa.name);
        console.log(names);

        console.log("------------");

        const familiaLars2 = results.meuFilter((item, index, lista) => {
            return item.name.toLowerCase().indexOf(`lars`) !==  - 1
        })
        const names2 = familiaLars2.map((pessoa) => pessoa.name);
        
        console.log(names2);
    } catch (error) {
        console.log('Error:', error);
    }
}

main();