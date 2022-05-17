/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = function () {
    return this.a + this.b;
  };

  this.subtraction = function () {
    return this.a - this.b;
  };

  this.multiplication = function () {
    return this.a * this.b;
  };

  this.division = function () {
    return this.a / this.b;
  };
}

let calcText = new Calculator(6, 3);

console.log(calcText);
console.log(calcText.sum());
console.log(calcText.subtraction());
console.log(calcText.multiplication());
console.log(calcText.division());
