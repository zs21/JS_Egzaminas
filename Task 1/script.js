/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
let inputEl = document.getElementById("search");
let submitButttonEl = document.getElementById("submit-btn");
let outputEl = document.getElementById("output");

let inputErrorsEl = document.querySelector(".error");

let grams;
let pounds;
let oz;

submitButttonEl.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  outputEl.innerHTML = "";
  if (Number.isNaN(Number.parseFloat(inputEl.value.replace(",", ".")))) {
    inputErrorsEl.textContent = "* Įrašykite skaičių";
  } else {
    grams = inputEl.value.replace(",", ".") * 1000;
    pounds = inputEl.value.replace(",", ".") * 2.2046;
    oz = inputEl.value.replace(",", ".") * 35.274;
    inputErrorsEl.textContent = "";

    let kilogramsEl = document.createElement("p");
    kilogramsEl.textContent = inputEl.value + " kilogramų / ai";
    let poundsEl = document.createElement("p");
    poundsEl.textContent = pounds + " svarų / ai";
    let gramsEl = document.createElement("p");
    gramsEl.textContent = grams + " gramų / ai";
    let ozEl = document.createElement("p");
    ozEl.textContent = oz + " uncijų / os";

    outputEl.appendChild(kilogramsEl);
    outputEl.appendChild(poundsEl);
    outputEl.appendChild(gramsEl);
    outputEl.appendChild(ozEl);
  }
  inputEl.value = "";
}
