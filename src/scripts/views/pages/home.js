import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div class="search-wrapper">
          <input class="search-input" placeholder="Search Restaurant or Category" aria-label="search-input">
          <button class="search-button">Search</button>
        </div>
        <div id="restaurants" class="restaurants">
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </div>
      </div>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.listRestaurants();
        const restaurantsContainer = document.querySelector('#restaurants');
        const searchButton = document.querySelector('.search-button');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });

        searchButton.addEventListener('click', async() => {
            restaurantsContainer.innerHTML = '';
            const searchInput = await document.querySelector('.search-input').value;
            const searchRestaurant = await RestaurantDbSource.searchRestaurant(searchInput);
            searchRestaurant.forEach((restaurant) => {
                restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
            });
        });
    },
};

export default Home;