function loadData() {  
	fetch('https://api.waifu.im/random/')
		.then((response) => response.json())
		.then((data) => {
			document.getElementById("anime_girl").src = data.images[0].url;
		});
}