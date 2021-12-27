// IMPRESSÃO NO CONSOLE DO NAVEGADOR 
//console.log('teste console'); 
//console.log(document);

// SELETOR
//var exibir = document.querySelector("h1");
//console.log(exibir);

var titulo_menu = document.querySelector(".titulo-menu");
titulo_menu.textContent = "Alessandra Monteiro";



var cliente = document.querySelector("#primeiro-paciente");
var tdpeso = cliente.querySelector(".info-peso");
var peso = tdpeso.textContent;
var tdaltura = cliente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var imc = peso / (altura * altura);


console.log(cliente);
console.log(peso);
console.log(altura);

console.log(imc);