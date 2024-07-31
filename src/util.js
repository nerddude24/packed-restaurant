function createElement(tag, text = "", classes = []) {
	const el = document.createElement(tag);
	el.textContent = text;
	classes.forEach((cls) => el.classList.add(cls));

	return el;
}

function createMainElement() {
	return createElement("div", "", ["main"]);
}

export { createElement, createMainElement };
