const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const Calculadora = require('../../src/calculadora');

let calc;
let resultado;

Given('que tengo una calculadora', function () {
  calc = new Calculadora();
});

When('sumo {int} y {int}', function (n1, n2) {
  resultado = calc.sumar(n1, n2);
});

Then('el resultado de la suma debe ser {int}', function (esperado) {
  assert.strictEqual(resultado, esperado);
});

When('resto {int} y {int}', function (n1, n2) {
  resultado = calc.restar(n1, n2);
});

Then('el resultado de la resta debe ser {int}', function (esperado) {
  assert.strictEqual(resultado, esperado);
});

When('multiplico {int} y {int}', function (n1, n2) {
  resultado = calc.multiplicar(n1, n2);
});

Then('el resultado de la multiplicación debe ser {int}', function (esperado) {
  assert.strictEqual(resultado, esperado);
});
