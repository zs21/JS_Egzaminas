/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

let outputEl = document.getElementById("output");

let buttonEl = document.getElementById("btn");
buttonEl.addEventListener("click", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const usersData = getUsersData();
  console.log(usersData);

  //   updateDOM(usersData);
  console.log(getUsersData);
}

async function getUsersData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  console.log(data.forEach((element) => console.log(element)));
  return data;
}

// async function updateDOM(data) {
//   await data.forEach(element);
//   {
//     createEl(element);
//   }
// }

// function createEl(obj) {
//   const newP = document.createElement("p");
//   newP.classList.add("newp");
//   newP.textContent = `${obj.login}, ${obj.avatar_url}`;
// }

console.log(getUsersData[5]);
