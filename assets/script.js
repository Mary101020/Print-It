// Les images et leur texte associé sont stockés dans ce tableau
// Chaque objet du tableau représente un slide et contient une propriété image et une propriété tagLine
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
// On sélectionne plusieurs éléments du document HTML à l'aide de document.querySelector et document.querySelectorAll
// l'élément de bannière
const banner = document.querySelector('#banner');
// l'élément d'image
const bannerImg = document.querySelector('.banner-img');
// l'élément de paragraphe de slogan
const tagLine = document.querySelector('#banner p');

// le bouton fléché gauche 
const leftArrow = document.querySelector('.arrow_left');

// le bouton fléché droit
const rightArrow = document.querySelector('.arrow_right');

// les indicateurs de point comme element parent
const indicatorParents = document.querySelector('.dots');

// la création de l'élément ul
const dotsContainer = document.createElement('ul');

// l'ajout de la classe "dots" à l'élément dotsContainer (ul)
dotsContainer.classList.add('dots');

// l'ajout de l'element dotsContainer à indicatorParents. Cela signifie que l'élément 
// dotsContainer apparaîtra comme un enfant de l'élément indicatorParents dans le document HTML
indicatorParents.appendChild(dotsContainer);


//déclare une nouvelle variable sectionIndex et lui attribue une valeur initiale de 0.
let sectionIndex = 0;

function setSelectedDot(index) {
	//la méthode querySelectorAll() est utilisée pour sélectionner tous les éléments
	// avec la classe "dot" qui sont des enfants de l'élément dotsContainer
	const dots = dotsContainer.querySelectorAll('.dot');
	//la méthode forEach() est pour itérer sur chaque élément de la collection de points et 
	//supprime la classe dot_selected de chacun puis ajoute la classe sur l'element selectioné
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[index].classList.add('dot_selected');
}

//La fonction changeSlide() met à jour l'image et le texte du slogan pour qu'ils correspondent
// à le slide actuel, et met à jour les indicateurs de points pour indiquer quel slide est 
//actuellement affichée.
function changeSlide() {
	//change src image
	bannerImg.src = "./assets/images/slideshow/" + slides[sectionIndex]["image"];
	//change the text slide
	tagLine.innerHTML = slides[sectionIndex]["tagLine"];
	setSelectedDot(sectionIndex);
}


//Les boutons fléchés gauche et droit sont configurés pour modifier la variable sectionIndex
// et appeler la fonction changeSlide() lorsqu'ils sont cliqués
leftArrow.addEventListener("click", function () {
	sectionIndex--;
	if (sectionIndex < 0) {
		sectionIndex = slides.length - 1;
	}
	changeSlide();
});

rightArrow.addEventListener("click", function () {
	sectionIndex++;
	if (sectionIndex >= slides.length) {
		sectionIndex = 0;
	}
	changeSlide();
});


//Enfin, on crée une liste d'indicateurs de points (un pour chaque slide) à l'aide 
//d'une boucle for et de la méthode createElement. Il ajoute chaque point à un nouvel élément
// et ajoute un Event Listener à chaque point pour changer le slide lorsqu'on clique dessus
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('li');
	//on ajoute la classe "dot"
	dot.classList.add('dot');
	dot.addEventListener('click', () => {
		sectionIndex = i;
		changeSlide();
	});
	//l'ajout de l'ojet dot à dotsContainer
	dotsContainer.appendChild(dot);
}

setSelectedDot(sectionIndex);
changeSlide();