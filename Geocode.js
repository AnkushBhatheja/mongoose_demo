const request = require('request');

module.exports = (address, callback) => request({
	url : `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
	json : true
}, (error, response, body)=>{
	callback(error, {
		lat : body.results[0].geometry.location.lat,
		lng : body.results[0].geometry.location.lng,
	})
});
