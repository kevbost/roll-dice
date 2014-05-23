/* global describe, it */
//just wanna see if this works


	// describe('Give it some context', function() {
	// 	describe('maybe a bit more context here', function() {
	// 		it('should be the expected value', function() {
	// 			var answer = 2;
	// 			expect(2).to.equal(answer);
	// 			expect(answer).to.be.a("number");
	// 		});

	// 		it('should be a number', function() {
	// 			var answer = 2;
	// 			expect(2).to.equal(answer);
	// 			expect(answer).to.be.a("number");
	// 		});

	// 	});
	// });



	// describe('square function', function() {
	// 	it('should multiply its argument by itself', function() {
	// 		var answer = square(2);
	// 		expect(answer).to.equal(4);
	// 	});

	// 	it('should throw errors for non Number types', function() {

	// 		var erroneousSquare = function() {
	// 			square('2');
	// 		}

	// 		expect(erroneousSquare).to.throw(Error);
	// 	});

	// 	it('should throw an error when no args are provided', function() {
	// 		expect(square).to.throw(Error);
	// 	});
	// });


	// describe('error checker checker', function() {
	// 	it('should check to see if the testing mechanism is working', function() {

	// 		var testingMech = testingMechTester(2);

	// 		expect(testingMech).to.equal(2);
	// 	});
	// });


(function() {
	'use strict';

	describe("Create Die Button", function() {

		// set input vaue to 7
		$('.die-sides').val('7');
		// then click the button
		$('.create-die').click();

		it("should create a die and store it in the gameDie global", function() {
			expect(gameDie.sides).to.equal(7);
		});

		it("should create a die with sides equal the input value", function() {
			var inputVal = parseInt($('.die-sides').val())
			expect(gameDie.sides).to.equal(inputVal);
		});

	});

	describe("Die Constructor", function() {

		it("should impart a sides property to instances", function() {
			var die = new Die(900);
			expect(die).to.have.property('sides');
		});

		it("should accept a number or a number as a string as its argument", function() {
			var die = new Die('7');
			expect(die.sides).to.equal(7);
		})

		describe("imparts a roll function", function() {
			it("that returns between its min and max values", function() {
				var die = new Die('7');

				for (var i = 0; i < 1000; i += 1) {
					expect(die.roll()).to.be.within(1, 7);
				}
			})
		})

	})
})();