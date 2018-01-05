// var morpion = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
var player = 1;
var table = new Array(42); // Je crée une variable appelée "table" qui correspond à un tableau de 42 cellules
for (var i = 0; i < table.length; i++) {  // i=0; si i est plus petit que la longueur du tableau; i++ agrémente i de 1 à chaque fois
  table[i] = 0;
}

var board = new Array(6);
for (var i = 0; i < board.length; i++) {
  board[i] = new Array(7);
}
for (var i = 0; i < board.length; i++) {
  for (var j = 0; j < board[i].length; j++) {
    board[i][j] = 0;
  }
}


var td = document.getElementsByTagName("td");
console.log(td.length);
for (var i = 0; i < td.length; i++) {
  td[i].onclick = function(e){
    var box = this.getAttribute("id");
    var colone = box%7;
    var ligne = Math.floor(box/7);
    play2(colone);
  }
}

var compteTour = 0;
confetti();


function play(id){ //J'appelle la fonction play
  console.log(id + " " + player); //J'affiche quel joueur joue
    compteTour++;  // Je compte les tours
  if(player == 1){  // Si c'est le joueur 1 qui a cliqué
    document.getElementById(id).classList.add("player1"); //Alors on ajoute la classe pour placer le signe
    table[id] = player;
    testVictoire();  // Je teste la victoire
    player = 2;  // C'est au tour du joueur 2
    console.log(compteTour + " tours ");  // J'affiche le nombre de tours dans la console
    // compteTour++;
  }else if(player == 2){  // Sinon si c'est le joueur 2 qui a cliqué
    document.getElementById(id).classList.add("player2"); //Alors on ajoute la classe pour placer le signe
    table[id] = player;
    testVictoire();

    player=1;  // C'est au tour du joueur 1
    console.log(compteTour + " tours ");
    // compteTour++;
  }
  document.getElementById(id).onclick = function() { return false; } // Le clic du joueur 2 ne fonctionnera pas
  document.getElementById('player').innerHTML = 'C\'est au tour du joueur '+player; //Affiche dans le HTML quel joueur doit jouer
}

function play2(colone){
  for (var i = board.length - 1; i >= 0; i--){
    console.log("i : "+i);
    if(board[i][colone] == 0) {
        var choice = colone +(i*7);
        document.getElementById(choice).classList.add("player"+player); //Alors on ajoute la classe pour placer le signe
        board[i][colone] = player;
        i = 0;
        testVictoire2();
        player = (player == 1)?2:1;
    }else{
      console.log("board["+i+"]["+colone+"] = "+board[i][colone]);
    }
  }
}

function testVictoire2(){
  var victory = false;
  for (var i = 0; i < board.length; i++) {
    console.log(i);
    if(board[i][0] == player && board[i][1] == player && board[i][2] == player && board[i][3] == player){
      victory = true;
    }else if(board[i][1] == player && board[i][2] == player && board[i][3] == player && board[i][4] == player){
      victory = true;
    }else if(board[i][2] == player && board[i][3] == player && board[i][4] == player && board[i][5] == player){
      victory = true;
    }else if(board[i][3] == player && board[i][4] == player && board[i][5] == player && board[i][6] == player){
      victory = true;
    }
  }
  if(victory == false){
    for (var i = 0; i < board[0].length; i++) {
      if(board[0][i] == player && board[1][i] == player && board[2][i] == player && board[3][i] == player){
        victory = true;
      }else if(board[1][i] == player && board[2][i] == player && board[3][i] == player && board[4][i] == player){
        victory = true;
      }else if(board[2][i] == player && board[3][i] == player && board[4][i] == player && board[5][i] == player){
        victory = true;
      }
    }
  }
  if (victory) { // Si on appelle la variable "victory"
var td = document.getElementsByTagName('td');
for (var i = 0; i < td.length; i++) {
  td[i].onclick=function(){
    return false;
  };
}
      var conf = document.getElementsByClassName('confetti'); // J'appelle l'élément "confetti"
      for (var i = 0; i < conf.length; i++) { // Si i est plus petit que la longueur de mon élément "conf"
        conf[i].style.top = "100%"; // Je spécifie le décalage du bord haut de la marge par rapport au bord haut du body
      }
      if (player == 1) { // Si c'est le joueur 1 qui gagne...
          document.getElementsByTagName('body')[0].style.backgroundImage = "url(./img/fireworks.jpg)"; // ...on appelle le bg image "theme_noel.jpg"
          document.getElementsByTagName('body')[0].style.backgroundSize = "100%"; // Je règle la taille du bg à 100% pour qu'il s'adapte à la résolution de l'écran
      }
      else { // sinon (Si c'est le joueur 2 qui gagne)
          document.getElementsByTagName('body')[0].style.backgroundImage = "url(./img/theme_noel.jpg)"; // ...on appelle le bg image "theme_noel.jpg"
          document.getElementsByTagName('body')[0].style.backgroundSize = "100%"; // Je règle la taille du bg à 100% pour qu'il s'adapte à la résolution de l'écran
          document.getElementById('bingo').style.backgroundColor = "Blue"; // Je change la couleur du bg d'alerte de victoire pour le joueur 2
        }
      // document.getElementById('bingo').innerHTML = "Félicitations... Le player " + player + " a gagné son bon de réduction de 20% à valoir sur tout le site !!!"; // Rappel de la div #bingo du html vers le js
      // document.getElementById('bingo').classList.remove("hidden"); // J'enlève la class (css) pour afficher la div en cas de victoire
      // document.getElementById('bingo').onclick = function() // Lorsque l'on clique sur le message
      // {
      //   document.getElementById('bingo').classList.add("hidden"); // Le message de victoire disparaît lorsqu'on clique dessus
      // }
      // for (var i = 0; i < table.length; i++) { // i=0; si i est plus petit que la longueur du tableau; i++ agrémente i de 1 à chaque fois
      //   document.getElementById(i).onclick = function() { return false; }; // Le clic de l'autre joueur ne fonctionnera pas
      // }
    }

}

function testVictoire() { // J'appelle la fonction pour tester la victoire
  if (victory) { // Si on appelle la variable "victory"
      var conf = document.getElementsByClassName('confetti'); // J'appelle l'élément "confetti"
      for (var i = 0; i < conf.length; i++) { // Si i est plus petit que la longueur de mon élément "conf"
        conf[i].style.top = "100%"; // Je spécifie le décalage du bord haut de la marge par rapport au bord haut du body
      }
      if (player == 1) { // Si c'est le joueur 1 qui gagne...
          document.getElementsByTagName('body')[0].style.backgroundImage = "url(./img/fireworks.jpg)"; // ...on appelle le bg image "theme_noel.jpg"
          document.getElementsByTagName('body')[0].style.backgroundSize = "100%"; // Je règle la taille du bg à 100% pour qu'il s'adapte à la résolution de l'écran
      }
      else { // sinon (Si c'est le joueur 2 qui gagne)
          document.getElementsByTagName('body')[0].style.backgroundImage = "url(./img/theme_noel.jpg)"; // ...on appelle le bg image "theme_noel.jpg"
          document.getElementsByTagName('body')[0].style.backgroundSize = "100%"; // Je règle la taille du bg à 100% pour qu'il s'adapte à la résolution de l'écran
          document.getElementById('bingo').style.backgroundColor = "Blue"; // Je change la couleur du bg d'alerte de victoire pour le joueur 2
        }
      // document.getElementById('bingo').innerHTML = "Félicitations... Le player " + player + " a gagné son bon de réduction de 20% à valoir sur tout le site !!!"; // Rappel de la div #bingo du html vers le js
      // document.getElementById('bingo').classList.remove("hidden"); // J'enlève la class (css) pour afficher la div en cas de victoire
      // document.getElementById('bingo').onclick = function() // Lorsque l'on clique sur le message
      // {
      //   document.getElementById('bingo').classList.add("hidden"); // Le message de victoire disparaît lorsqu'on clique dessus
      // }
      // for (var i = 0; i < table.length; i++) { // i=0; si i est plus petit que la longueur du tableau; i++ agrémente i de 1 à chaque fois
      //   document.getElementById(i).onclick = function() { return false; }; // Le clic de l'autre joueur ne fonctionnera pas
      // }
    }
  }

function confetti(){  // J'appelle la fonction confetti
  var couleurs = new Array(); // Je crée ma variable "couleurs" qui correspond à mon tableau
  couleurs = ["red","blue","yellow","green","gold","silver","white","bronze", "darkorange"]; // Je définie les couleurs de mes confettis
  for (var i = 0; i < 300; i++) { // Je crée une boucle qui va répéter 300 fois mon action
    var conf = document.createElement("div"); // Je crée un élément div et je le stocke dans la variable "conf"
    document.getElementsByTagName('body')[0].appendChild(conf); // Je rajoute l'élément enfant dans le corps de la page (body)
    conf.classList.add("confetti");  // Je rappelle la class "confetti" de mon CSS
    var rand = Math.floor(Math.random()*couleurs.length); // Je génère un nombre aléatoire...
    conf.style.backgroundColor = couleurs[rand]; // ...pour impacter mes couleurs
    var vitesse = Math.floor(Math.random()*5); // Je génère un nombre aléatoire de 5 pour une vitesse aléatoire de 0 à 5s
    //console.log(vitesse); // Je l'affiche dans la console
    conf.style.transition = "all "+vitesse+"s"; // Transition de vitesse/sec aléatoire sur conf
    var left = Math.floor(Math.random()*screen.width); // Je génère un nombre aléatoire pour étaler les confettis sur toute la largeur de l'écran...
    conf.style.left = left+"px"; // ...en partant de la gauche + tant de px
    var top = Math.floor(Math.random()*500)+20; // Je génère un nombre aléatoire pour disperser mes confettis sur toute la largeur de l'écran en partant de la gauche
    conf.style.top = -top+"px";
  }
}
