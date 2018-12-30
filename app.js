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
	if (keyScrollPrev < keyScrollCurrent || keyScrollPrev == 0) {
		stickyBar.classList.add("is-sticky")
	}
	else {
		stickyBar.classList.remove("is-sticky")
	}

	keyScrollPrev = keyScrollCurrent

});


