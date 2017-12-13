
const geocode = require('./Geocode');
const weather  =require('./Weather');


geocode('Chandigarh', (error, location) => {
	if(error){
		console.log('Some error occured in geocode');
	}else{
		console.log(JSON.stringify(location, undefined, 2));
		weather(location, (error, temperature)=> {
			if(error){
				console.log('Some error occured in weather');
			}else{
			console.log(JSON.stringify(temperature, undefined, 2));
		}
	});
	}
});
