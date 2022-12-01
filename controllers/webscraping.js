const cheerio = require('cheerio');
const axios = require('axios');


exports.display = (req, res) => {
    const url = 'https://www.trips.pk/tours/bahrain';
    const movies = [];
    axios.get(url).
        then((response) => {
            res.status(200)
            {
                console.log("ll");
                let $ = cheerio.load(response.data);
                $('.packages-listing .onhovercolor').each(function (el, index) {
                    let url = $(this).attr('href');
                    let title = $(this).find('h4 ').text();
                    let price = $(this).find('.package-price').text();
                    movies.push({ title: title, url: url, price: price });
                    console.log(movies);
                });
            }
        }).catch((error) => {
            console.log(error);
        })
    res.render("user/webscraping", {
        data: movies,
    })
}