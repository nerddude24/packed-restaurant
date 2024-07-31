import { createElement } from "../util";

export default function About() {
	const container = createElement("div");
	const text = createElement(
		"p",
		"This is a very simple web application that I made for TOP, It's built using vanilla JS, HTML, and CSS. It also uses Webpack and most of the Dom is made using JS only."
	);

	container.classList.add("bg-restaurant");
	container.appendChild(text);

	return container;
}
