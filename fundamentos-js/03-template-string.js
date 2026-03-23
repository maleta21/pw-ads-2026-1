const nome = 'Valvicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

//Mesclando strings com variáveis usando concatenação
const msg = 'Meu nome é' + nome + ', tenho ' + idade +
  ' anos e moro em ' + cidade + '.'
  console.log(msg1)

/*
  Mesclando strings e variáveis usando template string
  template strings são OBRIGATORIAMENTE delimitadas por ``
  (backticks / acentos graves / "crases")
*/
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

//Dentro de uma templete string, não estamos limitados a usar
//apenas variaveis dentro do símbolo ${}. Qualquer código JS
//válido pode ser empregado ali.
console.log(`EM ${2026 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)