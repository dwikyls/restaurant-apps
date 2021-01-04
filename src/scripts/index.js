import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const sideBar = document.getElementById('header_menu')
const drawer = document.getElementById('drawer')
const main = document.getElementById('main')

sideBar.addEventListener("click", event => {
    drawer.classList.toggle("open");
    event.stopPropagation();
});

main.addEventListener("click", event => {
    drawer.classList.remove("open");
    event.stopPropagation();
})