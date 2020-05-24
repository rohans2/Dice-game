var randomno1=6*Math.random()+1;
randomno1=Math.floor(randomno1);
var images="images/dice"+randomno1+".png";
document.querySelectorAll("img")[0].setAttribute("src",images);

var randomno2=6*Math.random()+1;
randomno2=Math.floor(randomno2);
var images2="images/dice"+randomno2+".png";
document.querySelectorAll("img")[1].setAttribute("src",images2);

if(randomno1>randomno2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomno2>randomno1)
{
  document.querySelector("h1").innerHTML=" Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="DRAW!!";
}
