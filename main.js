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


//primo ciclo per inserire dinamicamente tutti gli elementi
for(let i = 0; i < icons.length; i++){
		
	content += `<div class="icon">
						<i style="color:${icons[i].color};" class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>
						<div class="details">${icons[i].name}</div>
					</div>`;
					
}

container.innerHTML = content;



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

	//ciclo con l'array filtrato di elementi
	for(let i = 0; i < arrayFiltered.length; i++){
		
		content += `<div class="icon">
							<i style="color:${arrayFiltered[i].color};" class="${arrayFiltered[i].family} ${arrayFiltered[i].prefix}${arrayFiltered[i].name}"></i>
							<div class="details">${arrayFiltered[i].name}</div>
						</div>`;
						
	}

	container.innerHTML = content;
	
});


