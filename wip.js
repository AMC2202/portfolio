// Data dalla quale viene effettuato il countdown
var countDownDate = new Date("Feb 25, 2022 15:37:25").getTime();

// countdown - update al secondo
var countdownfunction = setInterval(function() {

  // Prende la data odierna
  var now = new Date().getTime();
  
  // Per registrare la distanza tra la data odierna e il countdown
  var distance = countDownDate - now;
  
  // Calcolo della distanza temporale
  var days = Math.floor(distance / (10000 * 40 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // id sull'elemento che deve mostrare il countdown
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // Testo da mostrare nel caso in cui il countdown terminasse
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);