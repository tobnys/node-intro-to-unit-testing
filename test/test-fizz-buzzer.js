const should = require("chai").should();

var fizzBuzzer = require("../fizzBuzzer");



describe('fizzBuzzer', () => {
    it('should return correct values', () => {

        [15, 30, 45].forEach(function(input) {
            fizzBuzzer(input).should.equal("fizz-buzz")
        });

        [3, 6, 9, 12].forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz');
        });

        [5, 10, 20].forEach(function(input) {
            fizzBuzzer(input).should.equal("buzz");
        });

        [1, 2, 4, 7].forEach(function(input) {
            fizzBuzzer(input).should.equal(input);
        });

    });

    it('should throw error if input not a number', () => {
        const badInputs = [true, false, "test", function() {}, [1, 2, 3]];
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    });
});



