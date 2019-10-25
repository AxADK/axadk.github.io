function setup() {
  createCanvas(larguraTela, alturaTela);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){
    if(pontoE < 5 && pontoD < 5)
    jogar();
    else
      verificaVencedor();
  }else{
  //Tela inicial
    telaInicial();
  }
}


function vaca2Vencedora(){
  background("Purple");
  fill("gray")
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(43);
  text("vaca da direita Venceu", 300, 200);
  image(imgVaca, 200, 60, 100, 100);
}


function vacaVencedora(){
  background("Purple");
  fill("Lime");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(43);
  text("vaca da esquerda Venceu", 300, 200);
  image(imgVaca, 200, 60, 100, 100);
}

function verificaVencedor(){
  if(pontoE >= 5)
    vacaVencedora();
  else
    vaca2Vencedora();

}

function telaInicial(){
  background("Purple");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(43);
  text("Jogo da Av. 1º de maio", 300, 200);
  textSize(24);
  text("Desenvolvido por Alexandre", 300, 240)
}

function jogar(){
  background(imgEstrada);
  movimentoCarro();
  movimentoVaca();
  mostraVaca();
  mostraCarro();
  pontosD();
  pontosE();
  placar();
  movimentoVaca2();
  atropelamento();
}