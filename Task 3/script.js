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
let messegeEl = document.getElementById("message");
let buttonEl = document.getElementById("btn");
buttonEl.addEventListener("click", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  messegeEl.style.display = "none";
  const usersData = await getUsersData();
  //   console.log(usersData);

  updateDOM(usersData);
}

async function getUsersData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}

async function updateDOM(data) {
  await data.forEach((user) => {
    let userCard = document.createElement("div");
    userCard.textContent = user.login;
    let avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    userCard.classList.add("userCard");
    avatar.classList.add("avatar");
    outputEl.appendChild(userCard);
    userCard.appendChild(avatar);
  });
}
