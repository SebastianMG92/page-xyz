headerElements = {
	navIcon: document.querySelector('.nav-icon'),
	navMenu: document.querySelector('.nav-menu'),
	stickyBar: document.querySelector('#sticky'),
	inputForms: document.querySelectorAll('.input input'),
	selectForms: document.querySelector('.input select'),
}
modalElements = {
	aboutLink : document.querySelectorAll("#about-me"),
	modalContent : document.querySelector(".modal-content"),
	modalWindow : document.querySelector(".about")
}
dragElements = {
	botonPortfolio : document.querySelectorAll("#portfolio-action"),
}



headerMetodos = {
	/*                             */
	/* Evento menu animacion en X y muestra el menu*/
	/*                             */
	/*                             */
	hamburguerMenu: function () {
		headerElements.navIcon.addEventListener('click', function () {
			headerElements.navIcon.classList.toggle('open');
			headerElements.navMenu.classList.toggle('nav-menu-display');
		})
	},
	/*                             */
	/* Evento del menu sticky*/
	/*                             */
	/*                             */
	stickyMenu: function () {
		keyScrollPrev = window.pageYOffset
		window.addEventListener('scroll', function () {
			keyScrollCurrent = window.pageYOffset
			if (keyScrollPrev < keyScrollCurrent) {
				headerElements.stickyBar.classList.remove('is-sticky');
				headerElements.navIcon.classList.remove('open');
				headerElements.navMenu.classList.add('nav-menu-display');
				headerElements.stickyBar.classList.add('hidde');
			}
			else if (keyScrollCurrent == 0) {
				headerElements.stickyBar.classList.remove('is-sticky');
				headerElements.stickyBar.classList.remove('hidde');
			}
			else {
				headerElements.stickyBar.classList.add('is-sticky');
				headerElements.stickyBar.classList.remove('hidde');
			}

			keyScrollPrev = keyScrollCurrent
		});
	},
	/*                             */
	/* Evento de animacion focus en el formulario principal con clase filled para contener la animacion*/
	/*                             */
	/*                             */

	formValidator : function(){
		for (let i = 0; i < headerElements.inputForms.length; i++) {
			headerElements.inputForms[i].addEventListener('focusout', function(){
			if (headerElements.inputForms[i].value != '') {
				headerElements.inputForms[i].classList.add('filled')
			}
			else {
				headerElements.inputForms[i].classList.remove('filled')
			}
			});
		}
		headerElements.selectForms.addEventListener("change", function(){
			if (headerElements.selectForms.value == null) {
				headerElements.selectForms.classList.remove('filled')
			} else {
				headerElements.selectForms.classList.add('filled')
			}
		});
	},
}

modalMetodos = {
	startModal : () => {
		for (let i = 0; i < modalElements.aboutLink.length; i++) {
			modalElements.aboutLink[i].addEventListener('click', () =>{
				modalElements.aboutLink[0].classList.toggle('about-link-open');
				modalElements.modalWindow.classList.toggle('about-close');
				modalElements.modalContent.classList.toggle('modal-content-close');
				headerElements.stickyBar.classList.add('is-sticky');
			})
		}
},

}


/***
 * 
 *  PORTAFOLIO DRAG
 * 
***/

function dragClic(){	
		for (let i = 0; i < dragElements.botonPortfolio.length; i++) {	
			dragElements.botonPortfolio[i].addEventListener("click", () => {
			var cajaDescripcion = dragElements.botonPortfolio[i].nextElementSibling,
					arrowDescription = dragElements.botonPortfolio[i].childNodes[3]
			if (cajaDescripcion.style.maxHeight) {
					cajaDescripcion.style.maxHeight = null;
					cajaDescripcion.style.visibility = null;
					arrowDescription.classList.toggle('active');
			} else {
					cajaDescripcion.style.maxHeight = cajaDescripcion.scrollHeight + "px";
					cajaDescripcion.style.visibility = "visible";
					arrowDescription.classList.toggle('active')
			}	
});}
}



headerMetodos.hamburguerMenu();
headerMetodos.stickyMenu();
headerMetodos.formValidator();
modalMetodos.startModal();
dragClic();



ScrollReveal().reveal('.anim-fade', {delay:200,useDelay: 'once',viewOffset: {
	top:200,
	bottom: 200
}	 })
