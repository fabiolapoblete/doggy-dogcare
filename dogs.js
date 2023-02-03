let dogsContainer = document.querySelector(".dogs-container");

//Get data
async function getDogs() {
  try {
    let response = await fetch("https://majazocom.github.io/Data/dogs.json");
    let dogs = await response.json();

    renderDogs(dogs);
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

  let dogCard = document.createElement("article");
  dogCard.classList.add("dog-card");
  dogCard.innerHTML = `
  <img src=${dog.img}>
  <ul>
    <li>${dog.name}${gender}</li>
    <li>${dog.age} years</li>
    <li>Breed: ${dog.breed}</li>
    <li>Owner: ${dog.owner.name}</li>
  </ul>
  `;

  dogsContainer.appendChild(dogCard);

  dog.HTML = dogCard;
}

getDogs();
