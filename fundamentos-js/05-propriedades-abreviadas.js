// Alguns dados de um usuário
const fullname = 'Jonicleisson Junqueira Júnior'
const username = 'junin'
const group = 'alunos'

//CRIANDO UM OBJETO APARTIR DAS VARIÁVEIS ACIMA
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/*
  quando o nome da propriedade de um objeto é identico
  à da variável que lhe dará o valor, é possivel usar
  a sintaxe chamada PROPRIEDADE ABREVIADA. Ela permite
  não repetir os nomes das variaveis à frente dos nomes
  das propriedades
*/
const user2 = {
    fullname,
    username,
    group
}
console.log(user2)

//Um objeto pode mesclar propriedades abreviadas e
// não abreviadas
const user3 = {
  fullname,
  username,
  password: 'SoberanoTricolor',
  group,
  lastlogin: '2026-03-02 11:27:35'
}
console.log(user3)

/*USANDO PROPRIEDADES ABREVIADAS PARA DEPURAÇÃO (DEBUG) */

const x = 10, y = 'batata'

/*
  Exibindo o valor das duas variáveis com console~log().
  Observe que os valores são mostrados, mas a saída não
  informa quais as variáveis de onde provêm osvalore.
*/
console.log(x, y)

/*
  saída melhorada: passando um objeto formado pelas variáveis
  como propriedades abreviadas para o console.log(), conseguimos
  identificar de onde vêm os valortes
*/
console.log({x, y})