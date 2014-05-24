function Die (sides) {
  this.sides = parseInt(sides);
 
  this.roll = function(){
    var result = Math.floor(Math.random() * this.sides + 1 );
    console.log('rolled 1d'+ this.sides, " for ", result);
    return result;
  }
}
 
// $('.create-die.button').click(function(){
//   var sides = $('.dice-input.create-die').val();
//   gameDie = new Die(sides);
//   console.log(sides);
//   $('.intro').remove();
//   $('#tridiv').addClass('activate');
//   $('.roll-result').html(gameDie.roll());
// });

// function renderRandomDieValue () {
//   $('.roll-result').html("You rolled a " + gameDie.roll() ".")
// }

// function showRollResult() {
//   $('.roll-result').addClass('active')
// }

$('.create-die.button').click(function() {
	// $('.create-dice.roll-six-sides').remove();
	$('.shape.cuboid-1.cub-1.cub-a').addClass("activate");
	var sides = 6;
	gameDie = new Die(sides);
	console.log(sides);
	$('.result.cub-a').text(gameDie.roll()).addClass("activate");
});