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

async function getCarsData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  updateDOM(data);
  return data;
}

// console.log(carsData);

async function updateDOM(data) {
  await data.forEach((brand) => {
    let brandCard = document.createElement("div");
    brandCard.textContent = brand.brand;
    brandCard.classList.add("brandCard");
    let brandCardModels = document.createElement("p");
    brandCardModels.textContent = brand.models;
    outputEl.appendChild(brandCard);
    brandCard.appendChild(brandCardModels);
  });
}
