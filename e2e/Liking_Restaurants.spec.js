Feature('Like Unlike Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant and the unlike it', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  
  I.amOnPage('/');

  I.seeElement('.restaurant__title');
  I.click(locate('a').inside('.restaurant__title').first());

  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  I.seeElement('.restaurant__title');
  I.click(locate('a').inside('.restaurant__title').first());

  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});