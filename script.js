var andressa = {
  icon:
    "https://media-exp1.licdn.com/dms/image/C5603AQF--Kh4FvyjzQ/profile-displayphoto-shrink_800_800/0/1638906163692?e=1653523200&v=beta&t=YpJkprsA1sEEJWj1k_c_ACsCzR-7ZMvwKy_-yPBHzus",
  nome: "Andressa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var jogadores = [andressa];

function adicionarJogador() {
  var nome = document.getElementById("nomeJogador");
  var icone = document.getElementById("iconeJogador");
  jogadores.push({
    icon: icone.value,
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  nome.value = "";
  icone.value = "";
  exibir(jogadores);
}

function calculo(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas;
  return pontos;
}

function exibir(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + `<img src="${jogadores[i].icon}">` + "</td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='actions ' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button class='actions ' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button class='actions ' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibir(jogadores);

//botões
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculo(jogador);

  for (var cont = 0; cont < jogadores.length; cont++) {
    if (cont != i) {
      var outrosJogadores = jogadores[cont];
      outrosJogadores.derrotas++;
    }
  }
  exibir(jogadores);
}

function adicionarEmpate() {
  for (var j = 0; j < jogadores.length; j++) {
    var jogador = jogadores[j];
    jogador.empates++;
    jogador.pontos = calculo(jogador);
  }
  exibir(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculo(jogador);

  for (var m = 0; m < jogadores.length; m++) {
    if (m != i) {
      var outrosJogadores = jogadores[m];
      outrosJogadores.vitorias++;
      outrosJogadores.pontos += 3;
    }
  }
  exibir(jogadores);
}

function zeraPontos() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibir(jogadores);
}