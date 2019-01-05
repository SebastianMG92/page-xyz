o = {
	navIcon: document.querySelector(".nav-icon"),
	navMenu: document.querySelector(".nav-menu"),
	stickyBar: document.querySelector("#sticky"),
	inputForms: document.querySelectorAll(".input input"),
}
keyScrollPrev = window.pageYOffset

m = {
	hamburguerMenu: function () {
		o.navIcon.addEventListener("click", function () {
			o.navIcon.classList.toggle("open");
			o.navMenu.classList.toggle("nav-menu-display");
		})
	},
	stickyMenu: function () {
		window.addEventListener('scroll', function () {
			keyScrollCurrent = window.pageYOffset
			if (keyScrollPrev < keyScrollCurrent) {
				o.stickyBar.classList.remove("is-sticky");
				o.navIcon.classList.remove("open");
				o.navMenu.classList.add("nav-menu-display");
				o.stickyBar.classList.add("hidde");
			}
			else if (keyScrollCurrent == 0) {
				o.stickyBar.classList.remove("is-sticky");
			}
			else {
				o.stickyBar.classList.add("is-sticky");
				o.stickyBar.classList.remove("hidde");
			}

			keyScrollPrev = keyScrollCurrent
		});
	},
	formValidator : function(){
		for (let i = 0; i < o.inputForms.length; i++) {
			o.inputForms[i].addEventListener("focusout", function(){
				console.log(i);
			if (o.inputForms[i].value != "") {
				o.inputForms[i].classList.add("filled")
			}
			else {
				o.inputForms[i].classList.remove("filled")
			}
			});
		}
	},
}

m.hamburguerMenu();
m.stickyMenu();
m.formValidator();





