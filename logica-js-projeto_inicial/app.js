//print do java
alert('Boas vindas ao jogo do número secreto');
//numero maximo do sorteio
let numeroMaximo = 100;
//randomizador de numeros
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
//variavel
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    //input do java
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log(chute);
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        //para o while
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //é igual a o de baixo tentativas = tentativas + 1;
        tentativas++;
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto}! com ${tentativas} ${palavraTentativa}`);

//operadores adicionais
//and (&&)
//or (||)
//igual (==)
//diferente (!=)
//not (!)