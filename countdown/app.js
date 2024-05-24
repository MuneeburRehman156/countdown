var name=prompt('Enter the name of event.')
var naam=name.slice(0,).toUpperCase()
var targetDate = new Date(prompt('Enter the date which you wanna target.Make sure date should be like this(sunday june 12 2024)'));
var img=prompt('Enter the url of image which you want to display.')
var image=document.getElementById('img')
setInterval(function() {
  document.getElementById("name").innerHTML =naam
  document.getElementById("img").innerHTML =image.src=img
  var now = new Date();
  var diff = targetDate - now;
  var seconds = Math.floor((diff / 1000) % 60);
  var minutes = Math.floor((diff / 1000 / 60) % 60);
  var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerHTML =
    "<span>" + days + "</span> days, " +
    "<span>" + hours + "</span> hours, " +
    "<span>" + minutes + "</span> minutes, and " +
    "<span>" + seconds + "</span> seconds";
}, 1000);




