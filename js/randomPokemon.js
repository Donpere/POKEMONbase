// Obtenez une référence de l'élément d'entrée
let pokeNameInput = document.getElementById("poke-name");

// Liste de chaînes de caractères possibles
const listPoke = ["Artikodin", "Sulfura", "Electhor", "Mewtwo", "Raikou", "Entei", "Suicune", "Lugia", "Ho-Oh", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Crehelf", "Crefollet", "Crefadet", "Dialga", "Palkia", "Heatran", "Regigigas", "Cresselia", "Cobaltium", "Terrakium", "Viridium", "Reshiram", "Zekrom", "Kyurem", "Xerneas", "Yveltal", "Tokorico", "Tokopiyon", "Tokotoro", "Tokopisco", "Cosmog", "Cosmovum", "Solgaleo", "Lunala", "Zacian", "Zamazenta", "Regieleki", "Regidrago"];

// Générez un index aléatoire dans la plage de votre liste de films
let indexRandom = Math.floor(Math.random() * listPoke.length);

// Remplissez la valeur de l'élément d'entrée avec une chaîne de caractères aléatoire de la liste
pokeNameInput.value = listPoke[indexRandom];