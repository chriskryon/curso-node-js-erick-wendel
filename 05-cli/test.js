const {
    deepEqual,
    ok
} = require('assert');

const DEFAULT_ITEM_CADASTRADO = {
    name: 'Flash',
    power: 'Speed',
    id: 1
};

describe('Suite de manipulação de heróis', () => {

    it('Deve pesquisar um herói usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO;

        ok(null, expected);
    });

    // it('Deve cadastrar um herói, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRADO;

    //     ok(null, expected);
    // })
})