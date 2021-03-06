const request = require('request');

var geocodeAddress = (addressToEncode, callback) => {
    var encodedAddress = encodeURIComponent(addressToEncode);
    request({
        //  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=6219%20N.%20Lenox%20Ave%20Chicago%20Illinois%2060646',
         url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
         json: true
        }, (error, response, body) => {
         if (error)
         {
           callback('Unable to connect to Google servers.');
         } else if (body.status === 'ZERO_RESULTS') {
           callback('Unable to find that address.')
         } else if (body.status === 'OK') {
           callback(undefined, {
             address: body.results[0].formatted_address,
             latitude: body.results[0].geometry.location.lat,
             longitude: body.results[0].geometry.location.lng
           });
       }
    });
};


module.exports = {
  geocodeAddress
}
