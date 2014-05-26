function Die (sides) {
  this.sides = parseInt(sides);
 
  this.roll = function(){
    var result = Math.floor(Math.random() * this.sides + 1 );
    console.log('rolled 1d'+ this.sides, " for ", result);
    return result;
  };
}
 
// $('.create-die.button').click(function(){
//   var sides = $('.dice-input.create-die').val();
//   gameDie = new Die(sides);
//   console.log(sides);
//   $('.intro').remove();
//   $('#tridiv .roll-result').addClass('activate');
//   $('.roll-result').html(gameDie.roll());
// });

// function renderRandomDieValue () {
//   $('.roll-result').html("You rolled a " + gameDie.roll() ".")
// }

// function showRollResult() {
//   $('.roll-result').addClass('active')
// }

$('.create-die1.button1').click(function() {
	// $('.create-dice.roll-six-sides').remove();
  var sides = 6;
  gameDie = new Die(sides);
	$('.shape.cuboid-1.cub-1').addClass("activate");
	console.log(sides + 'die 1');
  $('.intro').remove();
	// $('.tridiv.cub-a').addClass("activate h2Class");
	$('.roll-result').html('<h2 class="h2Class">' + gameDie.roll() + '</h2>').addClass("activate");
});

$('.create-die2.button2').click(function() {
	// $('.create-dice.roll-six-sides').remove();
  var sides = $('.dice-input.create-die').val();
  gameDie = new Die(sides + 'die 2');
	$('.shape.cuboid-1.cub-1').addClass("activate");
	console.log(sides + 'die 2');
  $('.intro').remove();
	// $('.tridiv.cub-a').addClass("activate h2Class");
	$('.roll-result').html('<h2 class="h2Class">' + gameDie.roll() + '</h2>').addClass("activate");
});