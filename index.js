const randomno1=6*Math.random()+1;
randomno1=Math.floor(randomno1);
const images="images/dice"+randomno1+".png";
$("img")[0].setAttribute("src",images);

let randomno2=6*Math.random()+1;
randomno2=Math.floor(randomno2);
let images2="images/dice"+randomno2+".png";
$("img")[1].setAttribute("src",images2);

if(randomno1>randomno2)
{
  $("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomno2>randomno1)
{
  $("h1").innerHTML=" Player 2 Wins 🚩";
}
else{
  $("h1").innerHTML="DRAW!!";
}
