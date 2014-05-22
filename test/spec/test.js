/* global describe, it */
//just wanna see if this works
(function() {
	'use strict';

	describe('Give it some context', function() {
		describe('maybe a bit more context here', function() {
			it('should be the expected value', function() {
				var answer = 2;
				expect(2).to.equal(answer);
				expect(answer).to.be.a("number");
			});

			it('should be a number', function() {
				var answer = 2;
				expect(2).to.equal(answer);
				expect(answer).to.be.a("number");
			});

		});
	});
})();

(function() {
	'use strict';

	describe('square function', function() {
		it('should multiply its argument by itself', function() {
			var answer = square(2);
			expect(answer).to.equal(4);
		});

		it('should throw errors for non Number types', function() {

			var erroneousSquare = function() {
				square('2');
			}

			expect(erroneousSquare).to.throw(Error);
		});

		it('should throw an error when no args are provided', function() {
			expect(square).to.throw(Error);
		});
	});
})();

(function() {
	'use strict';

	describe('error checker checker', function() {
		it('should check to see if the testing mechanism is working', function() {

			var testingMech = testingMechTester(2);

			expect(testingMech).to.equal(2);
		});
	});
})();

// (function() {
//      'use strict';

//      describe('click button working?', function() {
//          it('should verify that the click button generates 2', function() {

//             $('.lets-roll').click(function() {
//               die(2);

//              expect(die).to.equal(2);

//             });

//          });
//      });
// })();

// (function() {
// 	'use strict';

// 	describe('Fizz Buzz', function() {

// 		var fifteenFizzBuzz = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz";

// 		it('should correctly implement Fizz Buzz', function() {
// 			var answer = fizzBuzz(1, 15);
// 			expect(answer).to.equal(fifteenFizzBuzz);
// 		});

//         it("should turn multiples of 3 into Fizz", function(){

//             expect(fizzBuzz(3,3)).to.equal("Fizz");
//             expect(fizzBuzz(6,6)).to.equal("Fizz");
//             expect(fizzBuzz(33333333,33333333)).to.equal("Fizz");
//         });

//         it("should turn multiples of 5 into Fizz", function(){

//             expect(fizzBuzz(5,5)).to.equal("Buzz");
//             expect(fizzBuzz(10,10)).to.equal("Buzz");
//             expect(fizzBuzz(100000,100000)).to.equal("Buzz");
//         });

//         it("should turn multiples of 3 and 5 into Fizz", function(){

//             expect(fizzBuzz(15,15)).to.equal("FizzBuzz");
//             expect(fizzBuzz(30,30)).to.equal("FizzBuzz");
//             expect(fizzBuzz(45,45)).to.equal("FizzBuzz");
//         });

//         it("should return fizBuzz(1,100) when no args are provided", function(){
//             expect(fizzBuzz()).to.equal(fizzBuzz(1,100));
//         });
// 	});
// })();


describe("Create Die Button", function(){
    it("should create a die and store it in the gameDie global", function() {
        $('.die-sides').val('7');
        $('.create-die').click();

        expect(Die.sides).to.equal(7);
    });

    it("should create a die with sides equal the input value", function() {
        expect(Die.sides).to.equal($('.die-sides').val());
    });

});




















//