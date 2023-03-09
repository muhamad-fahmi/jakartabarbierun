var countDownDate = new Date("May 26, 2023 00:01:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  $('#countdown .card .days').text(days);
  $('#countdown .card .hours').text(hours);
  $('#countdown .card .minutes').text(minutes);
  $('#countdown .card .seconds').text(seconds);
  $('#countdown').css('display', 'block');
  
  if (distance < 0) {
    clearInterval(x);
    $('#countdown').addClass('text-center text-muted').text("Acara Berakhir");
  }
}, 1000);


window.addEventListener(
    'hashchange',
    () => window.history.pushState({}, '', '/jakartabarbierun/'),
    {}
);
