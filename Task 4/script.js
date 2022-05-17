/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

let outputEl = document.getElementById("output");

const carsData = getCarsData();

updateDOM(carsData);

async function getCarsData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}

console.log(getCarsData());

async function updateDOM(data) {
  await console.log(data[0]);
  const brandCard = document.createElement("div");
  brandCard.textContent = data[0];
  outputEl.appendChild(brandCard);
}
