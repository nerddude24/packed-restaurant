import { createElement, createMainElement } from "../util";

function createMenuItem(title, desc) {
	const item = createElement("article", "", ["menu-item"]);
	const itemTitle = createElement("h3", title, ["menu-item-title"]);
	const itemDesc = createElement("p", desc, ["menu-item-desc"]);
	const itemImg = createElement("div", "", ["menu-item-img"]);

	item.appendChild(itemTitle);
	item.appendChild(itemDesc);
	item.appendChild(itemImg);

	return item;
}

export default function Menu() {
	const container = createMainElement();
	const title = createElement("h1", "Menu Items", ["menu-title"]);
	const itemsContainer = createElement("div", "", ["menu-container"]);

	itemsContainer.appendChild(
		createMenuItem("JS Burger", "the worst burger you'll ever taste")
	);

	itemsContainer.appendChild(createMenuItem("Junior Developer", "wait what?"));

	itemsContainer.appendChild(
		createMenuItem("Pizza", "hold on what do you mean junior developer??")
	);

	container.appendChild(title);
	container.appendChild(itemsContainer);

	return container;
}
