// import {readFileSync} from fs;

// var data = readFileSync('chronicle.json','utf8');
//var db = JSON.parse(data);

const YEAR = 1900;

async function fetchDB() {
	const res = await fetch('chronicle.json');
	const data = await res.json();
	return data;
}

const db = await fetchDB();

export default function randomFact(year) {
	var facts = db[year];

	return facts[(Math.floor(Math.random()*facts.length)-1)];
}

console.log(randomFact(YEAR));