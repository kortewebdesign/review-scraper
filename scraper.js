const puppeteer = require('puppeteer');

async function scrapeGoogleRating() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Navigate to Google search
    await page.goto('https://qiblanco.com');
    
    await page.waitForSelector('div.reputon-google-reviews-widget')
    await page.waitForSelector('div.sc-dyf5n2-2')
    // Extract the rating
    const rating = await page.evaluate(() => {
        return document.querySelector('div.sc-1dyh3f1-4').innerText;
    });

    await browser.close();
    return rating;
}

module.exports = scrapeGoogleRating