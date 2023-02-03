let dogsContainer = document.querySelector(".dogs-container");
let dogs;
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

//Get data
async function getDogs() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/dogs.json");
    dogs = await response.json();

    renderDogs(dogs);
    console.log(dogs);
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
}

async function renderDogs(dogs) {
  dogs.forEach((dog) => {
    renderDogsUI(dog);
  });
}

function renderDogsUI(dog) {
  let gender;
  if (dog.sex === "female") {
    gender = "&#9794";
  } else {
    gender = "&#9792;";
  }

  //   if (dog.img.status === 404) {
  //     dog.img = url("karsten-winegeart-NE0XGVKTmcA-unsplash.jpg");
  //   }

  let dogCard = document.createElement("article");
  dogCard.classList.add("dog-card");
  dogCard.innerHTML = `
  <img src=${dog.img}>
  <ul>
    <li>${dog.name}${gender}</li>
    <li>Age: ${dog.age} years</li>
    <li>Breed: ${dog.breed}</li>
    <li>Owner: ${dog.owner.name}</li>
  </ul>
  `;

  dogsContainer.appendChild(dogCard);

  dog.HTML = dogCard;

  //Add eventlistener to each dogCard
  dogCard.addEventListener("click", () => {
    dogsContainer.replaceChildren();
    dogsContainer.appendChild(dog.HTML);
  });
}

searchInput.addEventListener("input", (event) => {
  event.preventDefault(); //För att inte genomföra default acions som sker vid knapptryck på submitknapp i form
  dogsContainer.replaceChildren();
  dogs.forEach((dog) => {
    if (dog.name.toLowerCase() === searchInput.value.toLowerCase()) {
      dogsContainer.appendChild(dog.HTML);
    }
  });
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault(); //För att inte genomföra default acions som sker vid knapptryck på submitknapp i form
  dogsContainer.replaceChildren();
  dogs.forEach((dog) => {
    if (dog.name.toLowerCase() === searchInput.value.toLowerCase()) {
      dogsContainer.appendChild(dog.HTML);
    }
  });
});

getDogs();
