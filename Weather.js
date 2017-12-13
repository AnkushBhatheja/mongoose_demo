const request = require('request');

module.exports = (location, callback) => request({
	url : `https://api.darksky.net/forecast/770f361cd2afaf9c06f3870c6615517c/${location.lat},${location.lng}`,
	json : true
}, (error, response, body)=>{
	callback(error, {
		temperature : body.currently.temperature,
	})
});
