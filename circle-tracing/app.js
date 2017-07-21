/*

when you click on the square
with the blue circle, the
circle moves to another div
randomly.  

if the div doesn't have the
cir
*/

$(document).ready(function(){
  $('.square').on('click',function(){
    appendTarget(this)
  })
})

function getRandomNum(min,max) {
  return Math.floor(Math.random()*(max-min))+min;
}

function appendTarget(square) {
  if($(square).find('#target').length !== 0){
  // 1 added to excludedNum (1->max) to match nth-child indexing
    var excludedNum = $(square).index()+1;
    var randomNum = getRandomNum(1,5)
    while(randomNum === excludedNum){
      randomNum = getRandomNum(1,5);
    }
    var randomSquare = `.square:nth-child(${randomNum})`;
    console.log('random square',randomSquare);
    $(randomSquare).append($('#target'));
  }
}

