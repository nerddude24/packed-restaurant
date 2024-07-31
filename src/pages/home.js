import { createElement, createMainElement } from "../util";

export default function Home() {
	const container = createMainElement();
	const header = createElement("h1", "Packed Restaurant", ["header"]);
	const subHeader = createElement(
		"p",
		"A restaurant that combines a few tons of ingredients and spits them out to you in a plate!",
		["sub-header"]
	);

	container.appendChild(header);
	container.appendChild(subHeader);
	
	container.classList.add("flex-center");

	return container;
}
