function CalcularPreco() {
// "Cria referência aos elementos da página
var inQuilo = document.getElementById("inQuilo")
var inConsumo = document.getElementById("inConsumo")
var outValor = document.getElementById("outValor")
// Obtém contéudo dos campos de entrada
var quilo = Number(inQuilo.value)
var consumo = Number(inConsumo.value)
// Calcula o valor a ser pago
var valor = (quilo / 1000) * consumo
// Altera o contéudo da linha dee resposta
outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2)
}
// Cria referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular")
// Registra um evento associado ao botão, para carregar uma função 
btCalcular.addEventListener("click", CalcularPreco)
