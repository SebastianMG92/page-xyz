o = {
	navIcon: document.querySelector('.nav-icon'),
	navMenu: document.querySelector('.nav-menu'),
	stickyBar: document.querySelector('#sticky'),
	inputForms: document.querySelectorAll('.input input'),
	selectForms: document.querySelector('.input select'),
}


m = {
	hamburguerMenu: function () {
		o.navIcon.addEventListener('click', function () {
			o.navIcon.classList.toggle('open');
			o.navMenu.classList.toggle('nav-menu-display');
		})
	},
	stickyMenu: function () {
		keyScrollPrev = window.pageYOffset
		window.addEventListener('scroll', function () {
			keyScrollCurrent = window.pageYOffset
			if (keyScrollPrev < keyScrollCurrent) {
				o.stickyBar.classList.remove('is-sticky');
				o.navIcon.classList.remove('open');
				o.navMenu.classList.add('nav-menu-display');
				o.stickyBar.classList.add('hidde');
			}
			else if (keyScrollCurrent == 0) {
				o.stickyBar.classList.remove('is-sticky');
				o.stickyBar.classList.remove('hidde');
			}
			else {
				o.stickyBar.classList.add('is-sticky');
				o.stickyBar.classList.remove('hidde');
			}

			keyScrollPrev = keyScrollCurrent
		});
	},
	formValidator : function(){
		for (let i = 0; i < o.inputForms.length; i++) {
			o.inputForms[i].addEventListener('focusout', function(){
			if (o.inputForms[i].value != '') {
				o.inputForms[i].classList.add('filled')
			}
			else {
				o.inputForms[i].classList.remove('filled')
			}
			});
		}
		o.selectForms.addEventListener("change", function(){
			if (o.selectForms.value == null) {
				o.selectForms.classList.remove('filled')
			} else {
				o.selectForms.classList.add('filled')
			}
		});
	},
}

m.hamburguerMenu();
m.stickyMenu();
m.formValidator();





