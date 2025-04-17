document.addEventListener("DOMContentLoaded", () => {
	const tabButtons = document.querySelectorAll(".window-tablist-button");
	const contentSections = document.querySelectorAll(".window-menuarticle");

	tabButtons.forEach((button) => {
		button.addEventListener("click", () => {
			contentSections.forEach(section => {
				section.hidden = true;
			});
			tabButtons.forEach(btn => btn.classList.remove("active-tab"));

			const id = button.textContent.trim().toLowerCase();
			const target = document.getElementById(id);
			if (target) {
				target.hidden = false;
			}

			button.classList.add("active-tab");
		});
	});
});
