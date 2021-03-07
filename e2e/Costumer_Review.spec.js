Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__title');
  I.click(locate('a').inside('.restaurant__title').first());
});

Scenario('Review with fill all field', async ({ I }) => {
  I.seeElement('.add-review');

  const reviewText = 'test review menggunakan e2e';
  I.fillField('.reviewer-name', reviewText);
  I.fillField('.reviewer-text', 'from diresto');
  I.seeElement('.review-button');
  I.click(locate('.review-button'));
});

Scenario('Submit button without fill form review', async ({ I }) => {
  I.seeElement('.add-review');
  I.seeElement('.review-button');

  I.click(locate('.review-button'));
});
