let dataObjects = [];
 const url = "http://localhost:3000/api/data/"
async function fetchData(page) {
  const response = await fetch(url + page);
  dataObjects = await response.json();
  dataObjects.forEach(createCard);
}

const cardContainer = document.getElementById("cards-container");

function createCard(dataObject) {

  const card = document.createElement("div");
  card.className = "card";

  const titleElement = document.createElement("h2");
  titleElement.textContent = dataObject.title;

  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", dataObject.img);

  imageContainer.appendChild(imageElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = dataObject.description;

  card.appendChild(titleElement);
  card.appendChild(imageContainer);
  card.appendChild(descriptionElement);

  cardContainer.appendChild(card);
}

let dataObjects2 = [];
// async function fetchData2(){
//   const response = await fetch(url + "2")
//   const jsonData = await response.json();
//   console.log(jsonData)
//   jsonData.forEach(createCard)
// }
fetchData(1);
fetchData(2);