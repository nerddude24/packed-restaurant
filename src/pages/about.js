import { createElement } from "../util";

export default function About() {
	const container = createElement("div", "", ["main"]);
	const text = createElement(
		"p",
		"This is a very simple web application that I made for TOP, It's built using vanilla JS, HTML, and CSS.\r\n"
	);
	text.textContent +=
		"It also uses Webpack and most of the Dom is made using JS only.";

	container.appendChild(text);

	return container;
}
