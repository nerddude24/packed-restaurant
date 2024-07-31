import "./style.css";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";

// we have enums at home:
const PAGES = Object.freeze({
	HOME: "home",
	MENU: "menu",
	ABOUT: "about",
});

const content = document.getElementById("content");

function clearContent() {
	content.innerHTML = "";
}

function setContent(newPage) {
	clearContent();

	switch (newPage) {
		case PAGES.HOME:
			content.appendChild(Home());
			break;
		case PAGES.MENU:
			content.appendChild(Menu());
			break;
		case PAGES.ABOUT:
			content.appendChild(About());
			break;
		default:
			console.error(`UNKNOWN PAGE VALUE! (${newPage})`);
			break;
	}
}
