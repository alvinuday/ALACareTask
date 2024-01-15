// Example JavaScript code to change the content of the grid based on navigation links
const links = document.querySelectorAll('.sidebar a');
const grid = document.querySelector('.grid');

links.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const href = link.getAttribute('href');
		grid.innerHTML = `<img src="${href}.jpg" alt="Image">`;
	});
});