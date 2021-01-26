import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
    static async listRestaurants() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async searchRestaurant(params) {
        const response = await fetch(API_ENDPOINT.SEARCH(params));
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async addReview(restaurantId, reviewerName, reviewValue) {
        const data = {
            id: restaurantId,
            name: reviewerName,
            review: reviewValue,
        };
        try {
            const response = await fetch(API_ENDPOINT.REVIEW, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': '12345',
                },
                body: JSON.stringify(data),
            });
            const responseJson = await response.json();
            alert('berhasil komentar ');
            location.reload();
            return responseJson.restaurant;
        } catch (error) {
            alert('data kurang tepat');
        };
    }
}

export default RestaurantDbSource;