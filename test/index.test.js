'use strict';

const expect = require('chai').expect;

describe('Index Unit Test', () => {
    it('works', () => {
        const main = require('../');
        const result = main();

        expect(result).to.equal('Hello Node');
    });

    it('it is a function', () => {
    	const main = require('../');
    	expect(main).to.be.a.function;
    })
});
