function square(x) {

	var TypeError = new Error("square function must be given a number");

	if (typeof(x) !== 'number') {
		throw(TypeError);
	}
 return x * x;
}

function testingMechTester(x) {
	return x;
}

// Should return 2 // done
// Does the click button generate the 2
// Does the click button itself animate when clicked &:hover'd
// Clicking div.a should &.active div.bA div.c
// Click should animate div.bA
// div.c should display the correct value returned by random
// 



// function fizzBuzz(first, last){
// 	var start, stop, string = '';
// 	console.log(fizzBuzz);

// 	if (last) {
// 		// we do a for loop from first to last
// 		start = first;
// 		stop = last;
// 	} else if (first) {
// 		// we do a for loop from 1 to first
// 		start = 1;
// 		stop = first;
// 	} else {
// 		// we do a for loop from 1 to 100
// 		start = 1;
// 		stop = 100;
// 	}

// 	for (var i = start; i <= stop; i += 1); {
// 		if ( i % 3 == 0 && i % 5 == 0) {
// 			string += 'FizzBuzz ';
// 		} else if (i % 3 == 0) {
// 			string += 'Fizz ';
// 		} else if (i % 5 == 0) {
// 			string += 'Buzz ';
// 		} else {
// 		 	string += i + ' ';
// 			}
// 		}
// 	return string.slice(0,-1);
// }

function Die (sides) {
	// turns stringed numbers into integers
	this.sides = parseInt(sides); 
	// this.sides = sides;

	this.roll = function(){
		var result = Math.floor(Math.random() * this.sides + 1 );
		console.log('rolled 1d' + this.sides, " for ", result);
		return result;
	}
}

$('.create-die').click(function(){
	var sides = $('.die-sides').val();
	gameDie = new Die(sides);
})
































// 