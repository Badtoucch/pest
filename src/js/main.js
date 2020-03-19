import "./helpers/postDate";
import scrollSmooth from "./helpers/smooth-scroll.js";
// import example from './modules/example.js';
import menu from "./modules/menu.js";
import infection from "./modules/infection.js";
import people from "./modules/people.js";
import reviews from "./modules/reviews.js";
import footer from "./modules/footer.js";

function main() {
	people();
	menu();
	footer();
	infection();
	reviews();
}

main();
