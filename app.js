navIcon = document.querySelector(".nav-icon"),
	navMenu = document.querySelector(".nav-menu"),
	stickyBar = document.querySelector("#sticky");
keyScrollPrev = window.pageYOffset


navIcon.addEventListener("click", function () {
	navIcon.classList.toggle("open");
	navMenu.classList.toggle("nav-menu-display");
});


window.addEventListener('scroll', function () {
	keyScrollCurrent = window.pageYOffset
	if (keyScrollPrev < keyScrollCurrent) {
		stickyBar.classList.remove("is-sticky");
		navIcon.classList.remove("open");
		navMenu.classList.add("nav-menu-display");
		stickyBar.classList.add("hidde");
	}
	else if (keyScrollCurrent == 0) {
		stickyBar.classList.remove("is-sticky");
	}
	else {
		stickyBar.classList.add("is-sticky");
		stickyBar.classList.remove("hidde");
	}

	keyScrollPrev = keyScrollCurrent

});


