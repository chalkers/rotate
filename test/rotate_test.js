var rotate = require("../");
var assert = require("assert");

describe("rotate", function(){
    it("should rotate 0b00111100", function(){
       var value = 0b00111100;
       assert.equal(rotate(value), 0b00011110);
    });

    it("should rotate 0b01000010", function(){
        var value = 0b01000010;
        assert.equal(rotate(value), 0b00100001);
    });

    it("should rotate 0b10000000", function(){
        var value = 0b10000000;
        assert.equal(rotate(value), 0b01000000);
    });

    it("should rotate 0b11000000", function(){
        var value = 0b11000000;
        assert.equal(rotate(value), 0b01100000);
    });

    //TODO: The expected should be 128 less
    it("should rotate 0b10000001", function(){
        var value = 0b10000001;
        assert.equal(rotate(value), 0b11000000);
    });

    it("should rotate 0b10000011", function(){
        var value = 0b10000011;
        assert.equal(rotate(value), 0b11000001);
    });

});