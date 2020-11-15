"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListaConvidados = /*#__PURE__*/function () {
  function ListaConvidados() {
    _classCallCheck(this, ListaConvidados);

    this.convidados = [];
  }

  _createClass(ListaConvidados, [{
    key: "adiconar",
    value: function adiconar(nome, idade, cpf) {
      this.convidados.push({
        nome: nome,
        idade: idade,
        cpf: cpf
      });
      console.log(this.convidados);
    }
  }, {
    key: "listarConvidados",
    value: function listarConvidados() {
      console.log(this.convidados);
    }
  }]);

  return ListaConvidados;
}();

var listaConv = new ListaConvidados();

document.getElementById("adicionar").onclick = function () {
  var nome = document.getElementById("nome").value;
  listaConv.adiconar(nome, 33, "05876452180");
};

document.getElementById("listar").onclick = function () {
  listaConv.listarConvidados();
};
/* arrow Functions */


var soma = function soma(x, y) {
  return x + y;
};

var mult = function mult(x) {
  return x * 2;
};

console.log(mult(2));
/* ex valores padrão   */

var exp = function exp(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return x * y;
};

console.log(exp(2, 8));
