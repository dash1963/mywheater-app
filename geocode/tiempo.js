const request = require('request');
var lng = 41.9943975;
var lat = -87.75428629999999;
request({
  url: `https://api.darksky.net/forecast/c57d9d268d85d4cb97da8a78b9f98269/${lng},${lat}`,
  json: true
}, (error, response, body) => {
  if (error)
  {
    console.log('Unable to connect to Google servers.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address.')
  } else if (body.status === 'OK') {
       console.log(`Temperature: ${body.currently.temperature}`);
  }
});



//https://api.darksky.net/forecast/c57d9d268d85d4cb97da8a78b9f98269/
//https://api.darksky.net/forecast/c57d9d268d85d4cb97da8a78b9f98269/41.9943975,-87.75428629999999
