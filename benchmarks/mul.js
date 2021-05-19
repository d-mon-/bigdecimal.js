/*
  Copyright (c) 2021 Serkan Özel. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
'use strict';
const { Big } = require('big.js');
const { BigDecimal } = require('../lib/big_decimal.js');
const { BigDecimal: GWTDecimal } = require('bigdecimal');
const Benchmark = require('benchmark');
const { smallDecimals, smallDecimalsBigjs, smallDecimalsGWT } = require('./test_numbers');

const suite = new Benchmark.Suite;

suite.add('MultiplyTest#Bigdecimal.js', function () {
    let res2 = BigDecimal.fromValuel('1');
    for (const x of smallDecimals) {
        res2 = res2.multiply(x);
    }
}).add('MultiplyTest#Big.js', function () {
    let res = new Big('1');
    for (const x of smallDecimalsBigjs) {
        res = res.mul(x);
    }
}).add('MultiplyTest#GWTBased', function () {
    let res2 = GWTDecimal('1');
    for (const x of smallDecimalsGWT) {
        res2 = res2.multiply(x);
    }
}).on('cycle', function (event) {
    console.log(String(event.target))
}).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run();
