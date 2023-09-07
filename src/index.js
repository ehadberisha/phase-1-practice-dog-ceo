fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((Response) => Response.json())
  .then((data) => renderImgs(data.message));

fetch("https://dog.ceo/api/breeds/list/all")
  .then((Response) => Response.json())
  .then((data) => renderBreeds(Object.keys(data.message)));

function renderImgs(urlArr) {
  console.log(urlArr);

  const divForImgs = document.querySelector("#dog-image-container");

  urlArr.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    divForImgs.append(img);
  });
}

function renderBreeds(breedArr) {
  const ulForBreeds = document.querySelector("#dog-breeds");
  breedArr.forEach((breed) => {
    const li = document.createElement("li");

    li.textContent = breed;

    li.addEventListener("click", (e) => {
      e.target.style.color = "pink";
    });

    ulForBreeds.appendChild(li);
  });
}
