var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomImage1 = "dice" + randomNumber1.toString() + ".png";
var randomImage2 = "dice" + randomNumber2.toString() + ".png";

// Use JavaScript to update the HTML
document.querySelector(".img1").setAttribute("src", "../assets/images/" + randomImage1);
document.querySelector(".img2").setAttribute("src", "../assets/images/" + randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else{
    document.querySelector("h1").innerHTML = "It's a draw";
  }