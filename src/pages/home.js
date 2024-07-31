import { createElement } from "../util";

export default function Home() {
	const container = createElement("div");
	const header = createElement("h1", "Packed Restaurant", ["header"]);
	const subHeader = createElement(
		"p",
		"A restaurant that combines a few tons of ingredients and spits them out to you in a plate!",
		["sub-header"]
	);

	container.classList.add("bg-restaurant");
	container.appendChild(header);
	container.appendChild(subHeader);

	return container;
}
