// function square(x) {

// 	var TypeError = new Error("square function must be given a number");

// 	if (typeof(x) !== 'number') {
// 		throw(TypeError);
// 	}
//  return x * x;
// }

// function testingMechTester(x) {
// 	return x;
// }

// Should return 2 // done
// Does the click button generate the 2
// Does the click button itself animate when clicked &:hover'd
// Clicking div.a should &.active div.bA div.c
// Click should animate div.bA
// div.c should display the correct value returned by random
// 



function Die (sides) {
  this.sides = parseInt(sides);
 
  this.roll = function(){
    var result = Math.floor(Math.random() * this.sides + 1 );
    console.log('rolled 1d '+ this.sides, " for ", result);
    return result;
  }
}

// Roll a 6 sided die
$('.create-dice.roll-six-sides').click(function() {
	// $('.create-dice.roll-six-sides').remove();
	$('.shape.cuboid-1.cub-1.cub-a').addClass("activate");
	var sides = 6;
	gameDie = new Die(sides);
	console.log(sides);
	$('.result.cub-a').text(gameDie.roll()).addClass("activate");
});

// $('.roll-dice.roll-six-sides').click(function() {

// });


// Roll any sided die
$('.create-dice.roll-any-sides').click(function() {
	var sides = $('.input-die.roll-any-sides').val();
	gameDie = new Die(sides);
	if ( sides = 3 ) {
		alert("bitch plz")
	} else {
	$('.create-dice.roll-any-sides').remove();
	$('.shape.cuboid-1.cub-1.cub-b').addClass("activate");
	console.log(sides);
	$('.result.cub-b').text(gameDie.roll()).addClass("activate");
}
});


// function renderRandomDieValue () {
// 	$('.roll-result').html("You rolled a " + gameDie.roll() ".")
// }