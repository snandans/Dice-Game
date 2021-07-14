var n1 = Math.floor(Math.random()*6)+1;
var dice1img = "dice"+n1+".png";
var dice1sources = "images/"+dice1img;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",dice1sources);

var n2 = Math.floor(Math.random()*6)+1;
var dice2img = "dice"+n2+".png";
var dice2sources = "images/"+dice2img;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",dice2sources);

if(n1>n2){
    document.getElementsByTagName("h1").innerHTML = "Player 1 Wins";
}
else if(n1<n2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!!";
}