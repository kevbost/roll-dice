'use strict';

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

  $()
})

function renderRandomDieValue () {
  $('.roll-result').html("You rolled a " + gameDie.roll() ".")
}

function showRollResult() {
  $('.roll-result').addClass('active')
}
