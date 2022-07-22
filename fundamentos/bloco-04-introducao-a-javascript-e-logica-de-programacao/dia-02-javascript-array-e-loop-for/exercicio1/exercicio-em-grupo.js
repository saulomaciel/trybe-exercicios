// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.
function soma () {
    let soma = 0;
      for (let i = 1; i <= 50; i++) {
        soma += i;
      }
      return soma;
    }
    console.log(`A soma de 1 a 50 é: ${soma()}`)
    // 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
    let contador = 0;
    for (let i = 3; i < 150; i++) {
      if (i % 3 === 0) {
        contador += 1;
      } 
    }
    if (contador === 50) {
      console.log("Você considerou o index sendo <= 150!")
    }
    console.log(contador);
    // 3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.
    let pessoaX = 1;
    let pessoaY = 20;
    let pessoaZ = 5;
    if (pessoaX < pessoaY && pessoaX < pessoaZ) {
      console.log("PessoaX é a mais nova.")
    } else if(pessoaY < pessoaZ) {
      console.log("PessoaY é a mais nova.")
    } else {
      console.log("PessoaZ é a mais nova.")
    }