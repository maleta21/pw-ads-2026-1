let media = 7.6, situacao

if(media >= 6) {
    situacao = 'APROVADO'
}
else  {
    situacao = 'REPROVADO'
}

console.log('Situação do aluno com média', media, 'é', situacao, '.')

/*
 Decidindo a situação do aluno usando o operador ternário
*/
media = 5.1

situacao = media >= 6 ? 'APROVADO' : 'REPROVADO'

console.log('Situação do aluno com média', media, 'é', situacao, '.')

//---------------------------------------------------------------------

let user = 'guest', msg

/*
  Decidindo se p usuário pode entrar ounão usando if..else

  Quando há apenas uma linha de código após um if, while, etc.,
  podemos omitir as chaves
*/
if(user === 'admin') msg = 'Bem-Vindo!'
else msg = 'Acesoo negado.'

console.log(user, msg)

// Tomando a mesma decisão, mas usando o operador ternário
msg = user === 'admin' ? 'Bem-Vindo!' : 'Acesso negado.'
console.log(user, msg)