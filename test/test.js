var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-map-key');

describe('next/mapKey', function () {

  it('nx.mapKey', function () {
    var obj1 = {nx_name: 'fei',nx_test:'test-value', nx_age:100};

    var rs1 = nx.mapKey(obj1, (key,value)=>{
      return key.slice(3);
    })

    // console.log(rs1);

    assert.equal(rs1.name, 'fei');
    assert.equal(rs1.test, 'test-value');
    assert.equal(rs1.age, 100);
  });

});
