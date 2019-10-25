//Variáveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];

// Variável de aceleração
let aceleracaoVaca = 4;

//Largura e altura da tela
let alturaTela = 400;
let larguraTela = 600;

// Variáveis dos Carros
// Metade da largura dos Carros
let larguraCarro = 40;
let metadeCarro = larguraCarro / 2;

//Vaca
let yVaca2 = 368;
let yVaca = 368;
let xVaca2 = 150;
let xVaca = 450;

//Pontuação
let pontoD = 0;
let pontoE = 0;

let xCarro = [650, 800, 1000, -50, -120, -350];
let yCarro = [48, 99, 155, 218, 268, 322];
let velocidadeCarro = [2, 4, 6, 6, 4, 2]

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgVaca2 = loadImage('imagens/ator-1.png');
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carro-1invertido.png');
  imgCarro[4] = loadImage('imagens/carro-2invertido.png');
  imgCarro[5] = loadImage('imagens/carro-3invertido.png');
  
  //sons
  ponto = loadSound('sons/pontos.wav');
  atropelou = loadSound('sons/colidiu.mp3');
  trilha = loadSound('sons/trilha.mp3');
}