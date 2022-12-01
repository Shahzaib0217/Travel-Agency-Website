const fs = require('fs');
const puppeteer = require('puppeteer');

function extractItems() {

    const extractedElements = document.querySelectorAll('.module module--promo>module__content');

    const items = [];
    for (let element of extractedElements) {
        items.push(element.innerText);
    }
    return items;
}
/*
function extractItemss() {

    const extractedElementss = document.querySelectorAll('li');

    const itemss = [];
    for (let element of extractedElementss) {
        itemss.push(element.innerText);
    }
    return itemss;
}*/
async function scrapeItems(
    page,
    extractItems,
    extractItemss,
    itemCount,
    scrollDelay = 600000,
) {
    let items = [];
    try {
        let previousHeight;
        while (items.length < itemCount) {
            items = await page.evaluate(extractItems, extractItemss);
            previousHeight = await page.evaluate('document.body.scrollHeight');
            await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
            await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
            await page.waitForTimeout(scrollDelay);
        }
    } catch (e) { }
    return items;
}

(async () => {

    const browser = await puppeteer.launch({
        headless: false,

    });
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 926 });


    await page.goto('https://www.bbc.com/');
    await page.screenshot({ path: 'medicineimg.png', fullPage: true });


    const items = await scrapeItems(page, extractItems, 10);


    fs.writeFileSync('./items.txt', items.join('\n') + '\n');

    // Close the browser.
    await browser.close();
})();