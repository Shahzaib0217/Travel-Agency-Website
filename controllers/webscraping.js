const cheerio = require('cheerio');
const request = require('request');
const packages = [];

function getdata() {
    request("https://www.trips.pk/tours/bahrain", (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            $(".package-tab-right").each((i, el) => {
                const heading = $(el).find("h4").text().replace(/\s\s+/g, "");
                const package_price = $(el)
                    .find(".package-price")
                    .text()
                    .replace(/\s\s+/g, "");
                packages.push({ heading, package_price });
            });
        }
    })
}
exports.display = (req, res) => {

    getdata();
    res.render("user/webscraping", {
        data: packages,
    })
}