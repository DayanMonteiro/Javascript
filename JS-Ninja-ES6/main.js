class ListaConvidados {
    constructor() {
        this.convidados = [];
    }

    adiconar(nome, idade, cpf) {
        this.convidados.push({nome: nome, idade: idade, cpf: cpf});
        console.log(this.convidados);
    }

    listarConvidados() {
        console.log(this.convidados);
    }
}

var listaConv = new ListaConvidados();

document.getElementById("adicionar").onclick = function() {
    var nome = document.getElementById("nome").value;

    listaConv.adiconar(nome, 33, "05876452180");
};

document.getElementById("listar").onclick = function() {
   listaConv.listarConvidados(); 
};

/* arrow Functions */

var soma = (x, y) => x + y;
var mult = x => x * 2;

console.log(mult(2));


/* ex valores padrão   */
const exp = (x, y = 2) => x * y;
console.log(exp(2, 8));




