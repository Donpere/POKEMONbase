import { RespSize } from './cache-tools.js'; // Assurez-vous que le chemin d'accès est correct

let pokemonRef = document.getElementById("poke-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
  let pokemon = pokemonRef.value;
  let url = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokemon}`;
  console.log(url);
  
  fetch(url)
	.then((resp) => resp.json())
	.then((data) => {
	  console.log(data);
	  // Mesure la taille de la réponse JSON
	  RespSize(data);

	  result.innerHTML = `
	  <div class="info">
		  <div>
			<p class="title-result">${data.name.fr}</p>
			<p class="category">${data.category}</p>
			</div>
			
			<div class="types">
			  Types :
			  <ul>
			  ${data.types.map((type) => `<li>${type.name}</li>`).join('')}
			  </ul>
		  </div>
		  <img src=${data.sprites.regular} class="poster" alt="Image du Pokémon">
		  </div>
	  `;
	  
	  // Autres informations que vous souhaitez afficher :
	  // Vous pouvez ajouter du code pour afficher les statistiques, les résistances, la taille, le poids, etc.
	})
	.catch((error) => {
	  console.error("Une erreur s'est produite : ", error);
	  result.innerHTML = "Pokemon non trouvé ou une erreur s'est produite.";
	});
  };

  
  searchBtn.addEventListener("click", getMovie);
  
  pokemonRef.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
	  getMovie();
	}
  });
  
window.addEventListener("load", getMovie);
