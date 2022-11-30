const service = require('./service');

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const names1 = [];
        const names2 = [];
        const names3 = [];

        console.time('tempo for');
        for(let i = 0; i < result.results.length; i++) {
            const pessoa = result.results[i];

            names1.push(pessoa.name);
        }
        console.timeEnd('tempo for');
        // console.log(names1);

        console.time('tempo forin');
        for(let i in result.results) {
            const pessoa = result.results[i];
            names2.push(pessoa.name);
        }
        console.timeEnd('tempo forin');
        // console.log(names2);

        console.time('tempo forof');
        for(pessoa of result.results) {
            let nome = pessoa.name;
            names3.push(nome);
        }
        console.timeEnd('tempo forof');
        // console.log(names3);

    } catch(error) {
        console.log('Erro:', error);
    }
}

main()