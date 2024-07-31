import { createElement, createMainElement } from "../util";

export default function About() {
	const container = createMainElement();
	const text = createElement(
		"p",
		"This is a very simple web application that I made for TOP, It's built using vanilla JS, HTML, and CSS.\r\n",
		["breakable-txt"]
	);
	text.textContent +=
		"It also uses Webpack and most of the Dom is made using JS only.";

	container.appendChild(text);
	container.classList.add("flex-center");

	return container;
}
