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
    console.log('rolled 1d'+ this.sides, " for ", result);
    return result;
  }
}
 
$('.create-die').click(function(){
  var sides = $('.die-sides').val();
  gameDie = new Die(sides);
})

function renderRandomDieValue () {
	$('.roll-result').html("You rolled a " + gameDie.roll() ".")
}
