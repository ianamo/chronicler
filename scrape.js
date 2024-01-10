import puppeteer from 'puppeteer';
import fs from 'fs';

const browse = async () =>{
	const database = {};
	const BASE_YEAR = 1900;
	const END_YEAR = 2024;
	const urlHead = 'https://en.wikipedia.org/wiki/';

	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
	});

	for (var year = BASE_YEAR; year<END_YEAR;year++) {

		var url = urlHead + String(year);
		const page = await browser.newPage();

		await page.goto(url,
		{waitUntil:'domcontentloaded'});


		const data = await page.evaluate(()=>{
			const factoids = document.querySelectorAll('.mw-content-ltr > ul > li');
			return Array.from(factoids).map(fact=>fact.innerText);
	}); 

		database[year] = data;

	}

	fs.writeFile('chronicle.json',JSON.stringify(database),(err)=>{if (err) throw err;
	 });

	await browser.close();

}

await browse();