
  var chooseDice1 = Math.floor((Math.random() * 6) + 1);
  var chooseDice2 = Math.floor((Math.random() * 6) + 1);

  document.querySelectorAll("img")[0].setAttribute("src","images/dice"+chooseDice1+".png");
  document.querySelectorAll("img")[1].setAttribute("src","images/dice"+chooseDice2+".png");

  if(chooseDice1 > chooseDice2)
  {
    document.querySelector("div h1").innerHTML = "🚩Player 1 Wins";
  }else if(chooseDice1 < chooseDice2){
    document.querySelector("div h1").innerHTML = "Player 2 Wins🚩";
  }else{
    document.querySelector("div h1").innerHTML = "Draw ! 😜";
  }
