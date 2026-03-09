/*
  DESESTRUTURAÇÃO (destructuring) é a operação que torna possível extrair
  valores individuais a partir de vetores e objetos, atribuindo-os a 
  variaveis avulsas
*/

// 1) DESESTRUTURAÇÃO DE VETOR
const carros = ['fusca', 'chevette', 'Opala']

//desestruturação
const [c1, c2, c3] = carros

/*
  sem a desestruturação, seria necessário fazer:
  const c1 = carros[0]
  const c2 = carros[1]
  const c3 = carros[2]
*/

console.log({c1, c2, c3})

//Desestruturaçã parcial: 1 e 3 elementos:
const [carros1, carros3] = carros
console.log({carros1, carros3})

//desestruturação parcial: 1 e 2 elementos:
const [k1, k2] = carros
console.log({k1, k2})

//desestruturação parcial: 2 e 3 elementos
const [v2, v3] = carros
console.log({v2, v3})

// PROBLEMA: troca de valores de variaveis entre si (swap)
let var1 = 10 , var2 = 20
console.log('ANTES: ', {var1, var2})

// Modo classico de fazer swap (usando uma variavel temporaria/auxiliar)
// let aux = var1
// var1 = var2
// var2 = aux

// Swap usando desestruturação
{ [var1, var2] = [var2, var1] }
console.log('DEPOIS:', {var1, var2})

console.log('-'.repeat(80))

// 2) DESESTRUTURAÇÃO DE OBJETOS

const pessoa = {
  name: 'Orkutilson Osório Oliveira',
  sexo: 'M',
  dataNasc: '2010-04-29',
  email: 'orkutilson@gmail.com'
}

/*
  No desestruturação de objetos, as variaveis avulsas:
  ~> DEVEM ter o MESMO NOME das propriedades do objeto que extraem
  ~> Podem ser especificados em qualquer ordem
  ~> Pode ser feita a desestruturação parcial
*/
const {sexo, nome, email} = pessoa

console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('E-mail:', email)