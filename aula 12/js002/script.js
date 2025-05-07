document.write("Hello, world!");

let guilherme = document.createElement('h4');
guilherme.textContent = "Olá Guilherme!";
document.body.appendChild(guilherme);

let nome = prompt("Qual é o seu CPF, cartão de crédito e endereço?");

//Concatenação
document.getElementById('linha1').textContent = "Obrigado, Agora vou roubar e invadir sua casa, " +nome+ "!";

//Template String
document.getElementById('linha2').textContent = `Obrigado, Agora vou roubar e invadir sua casa, ${nome}!`;

//Operações Matemáticas
let texto1 = prompt("Digite um número: ");
let texto2 = prompt("Digite outro número: ");

let numero1 = Number(texto1);
let numero2 = Number(texto2);

let soma = numero1 + numero2;
document.getElementById('linha3').textContent = `A soma de ${numero1} e ${numero2} é igual a ${soma}!`;