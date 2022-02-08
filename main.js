let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


let container = document.getElementById("container");
let content = "";

let selection = document.getElementById("filter");


//prima inseriamo il primo option per tutti i valori
selection.innerHTML += `<option value="">All</option>`;


//Inserisco la prima volta tutti gli elementi
generateIcons(icons);

//array che conterrà le opzioni della select
let options = [];

for(let i = 0; i < icons.length; i++){


	//se l'array di opzioni non include ancora l'opzione ciclata, allora inseriscila (per evitare doppioni)
	if(!options.includes(icons[i].type)){
		options.push(icons[i].type);
	}
	
	console.log(options);



	//PROVE VARIE CHE NON SONO ANDATE A BUON FINE
	/* let filteredOptions = options.filter(option =>{
		if(option[i] != option[i+1]){
			return true;
		}else{
			return false;
		}
	});

	console.log(filteredOptions); */

	/* let optionList = document.querySelectorAll("option");
	
	console.log(optionList); */

}

//scorriamo lungo il nuovo array di opzioni, e concateniamo le opzioni possibili
for(let j = 0; j < options.length; j++){
	selection.innerHTML += `<option value="${options[j]}">${options[j]}</option>`
}



//evento che segna il cambio all'interno della selection
selection.addEventListener("change", function(){
	
	//array filtrato in base alla corrispondenza tra il valore della select, e quello presente nell'array delle icone
	let arrayFiltered = icons.filter(icon =>{

		if(icon.type == this.value || this.value == ""){
			return true;
		}else{
			return false;
		}
	});

	console.log(arrayFiltered);

	//svuoto il contenuto precedente prima di inserire quello nuovo
	if(content != ""){
		content = "";
	}


	//mostro dinamicamente l'array filtrato di elementi
	generateIcons(arrayFiltered);
	
});



//funzione che disegna dinamicamente le icone
function generateIcons(arrayObjects){
	for(let i = 0; i < arrayObjects.length; i++){
		
		//cambio il colore dell'oggetto tramite la funzione apposita
		arrayObjects[i].color = randomColor();

		content += `<div class="icon">
							<i style="color:${arrayObjects[i].color};" class="${arrayObjects[i].family} ${arrayObjects[i].prefix}${arrayObjects[i].name}"></i>
							<div class="details">${arrayObjects[i].name}</div>
						</div>`;
						
	}

	container.innerHTML = content;
}


//funzione che genera un colore randomico per le icone
function randomColor(){

	const colorString = "0123456789abcdef";

	let colorResult = "";

	for(let i = 0; i < 6; i++){
		colorResult += colorString[Math.floor(Math.random() * colorString.length)];
	}

	return "#" + colorResult;

}


