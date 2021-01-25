import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="hero">
          <div class="hero-capt">
              <h1>Mau makan dimana hari ini?</h1>
              <p>Foodations siap menemani kamu makan dimana aja</p>
          </div>
          <div class="hero-img">
              <img src="./images/heros/hero-image.jpg" alt="hunger apps hero image">
          </div>
      </div>
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div class="search-wrapper">
          <input class="search-input" placeholder="Search Restaurant or Category" aria-label="search-input">
          <button class="search-button">Search</button>
        </div>
        <div id="restaurants" class="restaurants">
 
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

    searchButton.addEventListener('click', async () => {
      restaurantsContainer.innerHTML = '';
      const searchInput = await document.querySelector('.search-input').value;
      const searchRestaurant = await RestaurantDbSource.searchRestaurant(searchInput);
      searchRestaurant.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    });
  },
};

export default NowPlaying;
