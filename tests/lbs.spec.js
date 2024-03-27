const {test, expect} = require('@playwright/test');

test('My LBS Test', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await expect(page).toHaveTitle(/LBS/);
});

test('open offering', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.getByRole('link', { name: 'Offerings' }).click();
});

test('open Participating Projects', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.getByRole('link', { name: 'Participating Projects' }).click();
});

test('open fetaures kita bestari', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.locator('#KitaBestariTownhouse_features').click();
});
test('back fetaures kita bestari', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.locator('#KitaBestariTownhouse_features').click();
    await page.locator('#moreinfo_KitaBestariTownhouse').click();
});
test('open register', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.getByRole('link', { name: 'REGISTER', exact: true }).click();
});
test('click field', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.getByPlaceholder('Full Name*').click();
    await page.getByPlaceholder('Phone Number (e.g: 0123456789').click();
    await page.getByPlaceholder('Email (e.g: example@email.com').click();
});
test('insert register field', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.getByPlaceholder('Full Name*').click();
    await page.getByPlaceholder('Full Name*').fill('jad');
    await page.getByPlaceholder('Phone Number (e.g: 0123456789').click();
    await page.getByPlaceholder('Phone Number (e.g: 0123456789').fill('123456789');
    await page.getByPlaceholder('Email (e.g: example@email.com').click();
    await page.getByPlaceholder('Email (e.g: example@email.com').fill('test@gmail.com');
    await page.locator('#project').selectOption('Astella');
});
test('submit register', async ({page}) => {

    await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');
    await page.getByPlaceholder('Full Name*').click();
    await page.getByPlaceholder('Full Name*').fill('jad');
    await page.getByPlaceholder('Phone Number (e.g: 0123456789').click();
    await page.getByPlaceholder('Phone Number (e.g: 0123456789').fill('123456789');
    await page.getByPlaceholder('Email (e.g: example@email.com').click();
    await page.getByPlaceholder('Email (e.g: example@email.com').fill('test@gmail.com');
    await page.locator('#project').selectOption('Astella');
    await page.getByRole('button', { name: 'Submit Your Interest' }).click();
});