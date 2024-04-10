let numero1 = parseInt (prompt ("Escolha um número:"));
let numero2 = parseInt (prompt("Escolha mais um numero:"));
function verificarPrompt(){
    if (numero1 > numero2){
        alert (`O maior numero é o ${numero1}`);
    }
    else{
        alert (`O maior numero é ${numero2}`);
    }
}