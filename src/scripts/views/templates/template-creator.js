import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p><i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.address}, ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating} ${'⭐️'.repeat(restaurant.rating)}</p>
    <h4>Categories</h4>
    <ul>
      ${Array.from(restaurant.categories, (category) => `
        <li class="category"><i class="fa fa-tag" aria-hidden="true"></i> ${category.name}</li>
      `)}
    </ul>
  </div>
  <div class="restaurant__overview">
    <h3><i class="fa fa-book" aria-hidden="true"></i> Menu</h3>
    <div class="restaurant-menus">
      <div class="food-menus">
          <h4><i class="fa fa-cutlery" aria-hidden="true"></i> Foods</h4>
          <ul>
          ${Array.from(restaurant.menus.foods, (food) => `<li style="display: inline;"> ${food.name}</li>`)}
          </ul>
      </div>
      <div class="drink-menus">
          <h4><i class="fa fa-coffee" aria-hidden="true"></i> Drinks</h4>
          <ul>
          ${Array.from(restaurant.menus.drinks, (drink) => `<li style="display: inline;"> ${drink.name}</li>`)}
          </ul>
      </div>
    </div>
    <h3>Overview</h3>
    <p style="text-align: justify;">${restaurant.description}</p>
  </div>
  <h3><i class="fa fa-comments-o" aria-hidden="true"></i> Customer Review</h3>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}" crossorigin="anonymous" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}
            | <i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.city}</span>
            </p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createUserReviewTemplate = (restaurant) => `
  ${Array.from(restaurant.customerReviews, (reviewer) => `
    <h4>${reviewer.name}</h4>
    <p>${reviewer.review}</p>
    <p class="text-muted">${reviewer.date}</p>
  `)}
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createUserReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};