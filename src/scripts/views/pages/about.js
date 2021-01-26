import TheMovieDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const About = {
    async render() {
        return `
      <div class="content">
        <h2 class="content__heading">About in Cinema</h2>
        <div id="restaurants" class="restaurants">
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </div>
      </div>
    `;
    },

    async afterRender() {
        const restaurants = await TheMovieDbSource.AboutRestaurants();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((movie) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
        });
    },
};

export default About;