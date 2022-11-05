const dva = document.querySelector("#container");
const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (i = 1; i < 151; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  dva.appendChild(pokemon);
}

const lula = document.querySelector("#lula");

lula.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b}`;
  document.body.style.backgroundColor = newColor;
});
