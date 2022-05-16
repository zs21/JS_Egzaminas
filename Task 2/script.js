/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let clicks = 0;
let buttonEl = document.getElementById("btn__element");
let clickCounter = document.getElementById("btn__state");
buttonEl.addEventListener("click", onClick);

function onClick() {
  clicks += 1;
  clickCounter.innerHTML = clicks;
}
