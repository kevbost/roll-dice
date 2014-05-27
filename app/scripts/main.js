function Die (sides) {
  console.log('sides is', sides);
  console.log('parseInt(sides) is', parseInt(sides));
  this.sides = _.isNaN(parseInt(sides)) ? 6 : parseInt(sides);
  console.log('this.sides',this.sides);
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
	$('.shape.cuboid-1.cub-1').addClass("activate opacity");
  $('.shape.cuboid-1.cub-1').removeClass("reset");
	console.log(sides + 'die 1');
  $('.intro').remove();
	$('.roll-result').html('<h2 class="h2Class">' + gameDie.roll() + '</h2>').addClass("activate");
  console.log("removing activate adding reset");
  var resetting = function (){
    $('.shape.cuboid-1.cub-1').removeClass("activate").addClass("reset");
};
  _.delay(resetting, 5000);
});

$('.create-die2.button2').click(function() {
  var sides = $('.dice-input.create-die').val();
  gameDie = new Die(sides);
  $('.shape.cuboid-1.cub-1').addClass("activate opacity");
  $('.shape.cuboid-1.cub-1').removeClass("reset");
  // $('.cub-1.ft').css('&:after {content: "asdfasdf";font-size: 40px;'})
	console.log(sides + 'die 2');
  $('.intro').remove();
	$('.roll-result').html('<h2 class="h2Class">' + gameDie.roll() + '</h2>').addClass("activate");
  $('.dice-input.create-die').val('');
  console.log("removing activate adding reset");

  var resetting = function (){
    $('.shape.cuboid-1.cub-1').removeClass("activate").addClass("reset");
};
  _.delay(resetting, 5000);
});