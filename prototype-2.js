function Lutador(){
 this.attackPlayer = function(){
  console.log("atacou");;
 }
} 
function Habilidades(){
 this.esquivaPlayer = function(){
  console.log("esquivou");
 }
}

//fazendo Lutador herdar de Habilidades
Lutador.prototype = new Habilidades();
lutador1 = new Lutador();

//verificando
lutador1.attackPlayer()
lutador1.esquivaPlayer()