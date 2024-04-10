let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

function verificarConsole(){
    console.log ("O botão foi clicado");
}

function verificarAlert(){
    alert ("Eu amo JS");
}

function verificarPrompt(){
    let cidade = prompt("Qual o nome de uma cidade do Brasil?");
    alert (`Estive em ${cidade} e lembrei de você.`);
    }

function verificarSoma(){
    let numero1 = parseInt (prompt("Insira um número inteiro:"));
    let numero2 = parseInt (prompt("Insira outro numero inteiro:"));
    let resultado;
    resultado = numero1 + numero2
    alert (`O da soma de ${numero1} + ${numero2} é ${resultado}`);
}
