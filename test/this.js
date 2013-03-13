var assert = require('assert');

var echo = require('../');

describe('test echo capability', function () {
    it('should echo everything', function (done) {
        assert.equal(my_module("hello world!"), "hello world!");
        assert.equal(squareModule("bye bye!"), "bye bye!");
        
        done();
    });
});