let valor = parseFloat(prompt("Digite o valor:"));
let resultado;
function calculoDolar(parValor) {
    return valor*4.80
}
resultado = calculoDolar(valor);
alert(`O valor em dólar ficou ${resultado.toFixed(2)}`);