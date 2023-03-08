/* VARIÁVEIS(Interação com o usuário)*/

var nome = prompt ("Olá novo usuário! Qual é o seu nome?");
var idade = prompt ("Quantos anos você tem?");
var linguagem = prompt ("Qual linguagem de programação você está estudando?");
console.log("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");
var resposta = prompt ("você está gostando de estudar " + linguagem);
if (resposta == "sim"){
   console.log("Muito bom! Continue estudando e você terá muito sucesso.")
}
if (resposta == "nao"){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}