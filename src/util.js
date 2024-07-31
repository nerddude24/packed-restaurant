function createElement(tag, text = "", classes = []) {
	const el = document.createElement(tag);
	el.textContent = text;
	classes.forEach((cls) => el.classList.add(cls));

	return el;
}

export { createElement };
