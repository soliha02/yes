const url = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4f1e71d847mshd34a1ad6ccd41d1p1087adjsnb1b12e15aaad',
		'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
	}
};

try {
	fetch(url, options)
    .then((res)=>res.json())
    .then((json)=> console.log((json)));
    
	
} catch (error) {
	console.error(error);
}