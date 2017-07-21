$(document).ready(function(){
  $(".num").on('click',function(){
    detectClick()
    console.log(count);
  })
})

var count = 0;
var timer;

function detectClick() {
  count++;
  if(timer !== null) {
    clearTimeout(timer);
    $('.num').text('');
    timer = null;
  }
  timer = setTimeout(displayCount,2000);
}

function displayCount() {
  $('.num').text(count);
  count = 0;
}
