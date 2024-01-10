# Chronicler

Chronicler is a Node.js web scraper that can be used to hoover up facts from particular years from [Wikipedia](http://en.wikipedia.org/) into a `.json` file named `chronicle.json`. 

## Configuration

There are a few constants in `scrape.js` that might be helpful to modify: `BASE_YEAR` specifies the year to begin scraping from, and `END_YEAR` similarly specifies where to finish. `rand.js` gives an example of how to use the resulting `.json` file to generate random facts from a given year.

## Installation

Running `npm start`will install necessary dependencies and run `scrape.js`to generate the `chronicle.json`file. Running `node scrape.js` will re-generate the `.json` file, should that be necessary.

## TODO

Make a way for events, births, and deaths to be recognizably separated in the chronicle. 