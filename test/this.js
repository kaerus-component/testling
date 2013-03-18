var assert = require('assert');

var echo = require('../');

describe('test echo capability', function () {
    it('should echo everything', function (done) {
        assert.equal(echo("hello world!"), "hello world!");
        assert.equal(echo("bye bye!"), "bye bye!");
        
        done();
    });
});