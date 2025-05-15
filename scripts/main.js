document.addEventListener("DOMContentLoaded", () => {
	const images = [
		"https://media1.tenor.com/m/i-EHxKJYStIAAAAC/james-wilson-house.gif",
		"https://media1.tenor.com/m/WAKLsy9B6FsAAAAd/tekken-tekken-8.gif",
		"https://media1.tenor.com/m/K58N07lKvpAAAAAC/rashid-street.gif",
		"https://media1.tenor.com/m/sWIAJ_IVk6kAAAAd/my-honest-reaction-my-honest-reaction-meme.gif",
		"https://media1.tenor.com/m/banj382oaJMAAAAd/horse-horse-yapping.gif",
		"https://media1.tenor.com/m/9QT5PUtMUeIAAAAd/spectre-osu-players.gif",
		"https://media1.tenor.com/m/mKjSo7AS9vAAAAAd/onimai-mahiro.gif",
		"https://media1.tenor.com/m/v8nb7KZ2L7sAAAAd/michiru-kagemori-michiru.gif",
		"https://media1.tenor.com/m/3lAgnX3yF5QAAAAd/mizuki-akiyama.gif",
		"https://media1.tenor.com/m/9zaRzkks96oAAAAd/nene-kusanagi-nene-pjsk.gif",
		"https://media1.tenor.com/m/PE5ruuKARBIAAAAd/anime-love-live.gif",
		"https://media1.tenor.com/m/THTwDQDdySUAAAAd/metal-gear-rising-mgr.gif",
		"https://media1.tenor.com/m/1I5obsxqmOAAAAAd/may-guilty-gear-may-pipe-bomb.gif"
	];
	const randomIndex = Math.floor(Math.random() * images.length);
	document.getElementById('image-maincontent').src = images[randomIndex];

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
