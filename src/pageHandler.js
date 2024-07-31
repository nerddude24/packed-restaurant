const content = document.getElementById("content");

function createElement(tag, text, classes = []) {
	const el = document.createElement(tag);
	el.textContent = text;
	classes.forEach((cls) => el.classList.add(cls));

	return el;
}

function init() {
	const header = createElement("h1", "Packed Restaurant", ["header"]);
	const subHeader = createElement(
		"p",
		"A restaurant that combines a few tons of ingredients and spits them out to you in a plate!",
		["sub-header"]
	);

	content.classList.add("bg-restaurant");
	content.appendChild(header);
	content.appendChild(subHeader);
}

export { init };
