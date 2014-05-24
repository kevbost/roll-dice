function Die (sides) {
  this.sides = parseInt(sides);
 
  this.roll = function(){
    var result = Math.floor(Math.random() * this.sides + 1 );
    console.log('rolled 1d'+ this.sides, " for ", result);
    return result;
  }
}
 
$('.create-die.button').click(function(){
  var sides = $('.dice-input.create-die').val();
  gameDie = new Die(sides);
  console.log(sides);
  $('.intro').remove();
  $('#tridiv').addClass('activate');
  $('.roll-result').html(gameDie.roll());
});

// function renderRandomDieValue () {
//   $('.roll-result').html("You rolled a " + gameDie.roll() ".")
// }

// function showRollResult() {
//   $('.roll-result').addClass('active')
// }

