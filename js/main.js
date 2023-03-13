let DataList = [
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


tipo = 'user';  /*Stampa iniziale*/
createiconcards(tipo);

let selectorDom = document.getElementById('DropList');

selectorDom.addEventListener('click', function(){
    let tipo;
    var value = selectorDom.options[selectorDom.selectedIndex].value;
    switch(value){
        case 1:
        tipo = 'user';
		createiconcards(tipo);

        case 2:
        tipo = 'Vegetable';
		createiconcards(tipo);

        case 3:
        tipo = 'Animal';
		createiconcards(tipo);
    }
});


function createiconcards (tipo){
	let containerdom = document.getElementById('container-cards');
	containerdom.innerHTML = "";
	
	
	let Displayed = DataList.filter(DataList => DataList.type == tipo);
	
	Displayed.forEach((elemento, i) => {
		const card = `<div class="card">
							<div class="txt-box">
								 <i class="fa-solid ${DataList[i].prefix}${DataList[i].name}" style="color:${DataList[i].color}"></i>
								 <h2 id="body-txt">${DataList[i].name}</h2>
							</div>
						</div>`;   
		containerdom.innerHTML += card
	});
	
}
