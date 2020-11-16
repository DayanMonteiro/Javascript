"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// REST
// Pegar o resto das propriedades de um objeto
var convidado = {
  nome: "Felipe",
  idade: 37,
  endereco: "Av X, 39"
};

var nome = convidado.nome,
    rest = _objectWithoutProperties(convidado, ["nome"]); // console.log(nome);
// console.log(rest);


var convidados = [{
  nome: "Felipe",
  idade: 37,
  endereco: "Av X, 39"
}, {
  nome: "Bruno",
  idade: 23,
  endereco: "Av Y, 49"
}, {
  nome: "Isabele",
  idade: 21,
  endereco: "Av Z, 59"
}, {
  nome: "João",
  idade: 41,
  endereco: "Av W, 69"
}];
var felipe = convidados[0],
    bruno = convidados[1],
    outros = convidados.slice(2); // console.log(felipe);
// console.log(bruno);
// console.log(outros);

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    resto = arr.slice(2); // console.log(a);
// console.log(b);
// console.log(resto);
// Spread
// Repassar as propriedades para OUTRO objeto

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2); // console.log(arr3);

var convidado1 = {
  nome: "Felipe",
  idade: 37,
  endereco: "Av X, 39"
};

var novoConvidado = _objectSpread({}, convidado1, {
  idade: 38
}); // console.log(novoConvidado);
