const request = require('request');


var geocode = (address) => {
  return new Promise((resolve, reject) => {
    request({
    	url : `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    	json : true
    }, (error, response, body)=>{
      if(error){
        reject("Error in geocode");
      }
    	resolve({
    		lat : body.results[0].geometry.location.lat,
    		lng : body.results[0].geometry.location.lng,
    	});
    });
  });
};



geocode('Chandigarh').then((location) => {
  console.log(JSON.stringify(location));
}, (errorMessage) => {
  console.log(errorMessage);
});
