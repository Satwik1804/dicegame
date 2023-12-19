var randomNumber1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
var greater = randomNumber1 - randomNumber2;
var s = "Player 2 wins!";
if(greater>0){
    s = "Player 1 wins!";
}
else if(greater=0){
    s = "Draw";
}
document.querySelector("h1").innerHTML = s;
