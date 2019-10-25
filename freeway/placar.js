function pontosE(){
  if(yVaca <= 4){
    pontoD += 1;
    ponto.play();
    yVaca = 368;
  }
}

function pontosD(){
  if(yVaca2 <= 4){
    pontoE += 1;
    ponto.play();
    yVaca2 = 368;
  }
}

function placar(){
  fill("white")
  textSize(30);
  text(pontoE, larguraTela / 3.85, 30);
  text(pontoD, larguraTela - 145, 30); 
}

