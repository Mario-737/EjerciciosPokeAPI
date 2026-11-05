const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
const imgElement = document.getElementById("image");
const nameElement = document.getElementById("name");
const numberElement = document.getElementById("number");
const cardElement = document.getElementById("card");
const cargarElement = document.getElementById("cargar")
const alturaElement = document.getElementById("altura")
const pesoElement = document.getElementById("peso")

// nombre, numero, peso, algura, imagen


let number
cargarElement.addEventListener('click', () => {
  number = generarAleatorio(1, 151)
  fetchData(`${pokeAPI}${number}`)
})



let fetchData = async (url) => {

  let response = await fetch(url)
  let data = await response.json()

  imgElement.src = data.sprites.other.dream_world.front_default
  nameElement.innerText = `${data.name}`
  numberElement.innerText = `${number}`
  pesoElement.innerText = `${data.weight/10} kg`
  alturaElement.innerText = `${data.height/10} m`

  let tipos = data.types;

  tipos.forEach((element) => {
    console.log(element.type.name)

    let newButton = document.createElement("button")
    newButton.classList.add(element.type.name)
    newButton.innerText = element.type.name
    cardElement.appendChild(newButton)
  });
};



function generarAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}




