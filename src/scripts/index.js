import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css'
import data from '../DATA.json'

//SIDEBAR
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

//RESTAURAT ITEM LIST
const restList = document.querySelector('.rest-list')
let restData = data.restaurants

restData.forEach(e => {
    restList.innerHTML += `
        <div class="card">
            <div class="card-header">
                <div class="rating-tag">
                    <p tabindex="0">Rating: ${e.rating}</p>
                </div>
                <img width="100%" src="${e.pictureId}" alt="gambar restaurant ${e.name}">
            </div>
            <div class="card-body">
                <h3 tabindex="0">${e.name}</h3>
                <p tabindex="0">Lokasi: ${e.city}</p>
                <p tabindex="0" class="discover-item__description">${e.description}</p>
            </div>
        </div>
    `
})
