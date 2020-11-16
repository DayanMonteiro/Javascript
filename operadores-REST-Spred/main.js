// REST
// Pegar o resto das propriedades de um objeto

const convidado = { nome: "Dayan", idade: 37, endereco: "Av X, 159" };
const { nome, ...rest } = convidado;

// console.log(nome);
// console.log(rest);

const convidados = [
  { nome: "Dayan", idade: 33, endereco: "Av X, 159" },
  { nome: "Laryssa", idade: 23, endereco: "Av Y, 95" },
  { nome: "Gabriel", idade: 20, endereco: "Av Z, 300" },
  { nome: "Danilo", idade: 47, endereco: "Av W, 697" }
];

const [Dayan, Laryssa, ...outros] = convidados;

 console.log(Dayan);
 console.log(Laryssa);
 console.log(outros);

const arr = [1, 2, 3, 4];
const [a, b, ...resto] = arr;

console.log(a);
console.log(b);
console.log(resto);

// Spread
// Repassar as propriedades para OUTRO objeto

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // junta os arr1 e arr2 criando o arr3

 console.log(arr3);

const convidado1 = { nome: "Dayan", idade: 33, endereco: "Av X, 159" };
const novoConvidado = { ...convidado1, idade: 38 };

console.log(novoConvidado);

/* Template Literals*/
const convidado = { nome: "Dayan Monteiro", idade: 33 };
const { nome, idade } = convidado;

const mgs1 = "Olá " + nome + ", idade " + idade + ". Convidado aceito.";
const mgs2 = `Olá ${nome}, idade ${idade}. Convidado aceito.`;

console.log(msg1);
console.log(msg2);

/* Objetct short syntax */
const nome =  "Dayan",
const idade = 33,


const convidado = {
  nome,
  idade,
  endereco: "Rua Rio Grande do Sul, 39"
};

console.log(convidado);