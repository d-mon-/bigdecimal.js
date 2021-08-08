'use strict';
const { Big } = require('../../lib/bigdecimal');
const chai = require('chai');
chai.should();

describe('ToPlainString JDK', function () {

    it('toPlainString test', function () {
        const testCases = [
            ['0', '0'],
            ['1', '1'],
            ['10', '10'],
            ['2e1', '20'],
            ['3e2', '300'],
            ['4e3', '4000'],
            ['5e4', '50000'],
            ['6e5', '600000'],
            ['7e6', '7000000'],
            ['8e7', '80000000'],
            ['9e8', '900000000'],
            ['1e9', '1000000000'],

            ['.0', '0.0'],
            ['.1', '0.1'],
            ['.10', '0.10'],
            ['1e-1', '0.1'],
            ['1e-1', '0.1'],
            ['2e-2', '0.02'],
            ['3e-3', '0.003'],
            ['4e-4', '0.0004'],
            ['5e-5', '0.00005'],
            ['6e-6', '0.000006'],
            ['7e-7', '0.0000007'],
            ['8e-8', '0.00000008'],
            ['9e-9', '0.000000009'],
            ['9000e-12', '0.000000009000'],

            ['9000e-22', '0.0000000000000000009000'],
            ['12345678901234567890', '12345678901234567890'],
            ['12345678901234567890e22', '123456789012345678900000000000000000000000'],
            ['12345678901234567890e-22', '0.0012345678901234567890'],
        ];

        for (const testCase of testCases) {
            let bd = Big(testCase[0]);

            bd.toPlainString().should.be.eq(testCase[1]);
            bd = new Big('-' + testCase[0]);
            (bd.signum() !== 0 && bd.toPlainString() !== ('-' + testCase[1])).should.be.false;
        }
    });

});
