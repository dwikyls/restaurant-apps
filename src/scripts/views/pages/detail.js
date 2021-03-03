import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createUserReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
    async render() {
        return `
            <a href="/" class="back-button"><i class="fa fa-arrow-left" aria-hidden="true"></i> Kembali</a>
            <div id="restaurant" class="restaurant" style="margin-top: 10px;">
                <div id="loader-wrapper">
                    <div id="loader"></div>
                </div>
            </div>
            <div class="restaurant">
                <div class="user-review"></div>
                <div class="add-review">
                    <label for="reviewer-name"><i class="fa fa-user" aria-hidden="true"></i> Name</label>
                    <input class="reviewer-name" name="reviewer-name" type="text" placeholder="Name">
                    <label for="reviewer-text"><i class="fa fa-pencil" aria-hidden="true"></i> Feedback</label>
                    <textarea class="reviewer-text" name="reviewer-text" cols="700" rows="10" placeholder="Your Review"></textarea>
                    <button class="review-button">Add review <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        const reviewContainer = document.querySelector('.user-review');
        const reviewButton = document.querySelector('.review-button');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        reviewContainer.innerHTML = createUserReviewTemplate(restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                pictureId: restaurant.pictureId,
                rating: restaurant.rating,
                city: restaurant.city,
            },
        });
        reviewButton.addEventListener('click', async () => {
            const restaurantId = url.id;
            const reviewerName = document.querySelector('.reviewer-name').value;
            const reviewValue = document.querySelector('.reviewer-text').value;

            if (reviewerName === '' || reviewValue === '') {
                return alert('data tidak lengkap');
            } else {
                return await RestaurantDbSource.addReview(restaurantId, reviewerName, reviewValue);
            }
        });
    },
};

export default Detail;
