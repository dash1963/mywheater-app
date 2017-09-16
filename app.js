
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');



const argv = yargs
              .options({
               a: {
                   demand: true,
                    alias: 'address',
                 describe: 'Address to fectch weather for',
                   string: true
               }
              })
              .help()
              .alias('help', 'h')
              .argv;
      /* in the callback function we will only have either errorMessage or results,
         BUT NOT not at the same time
      */
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
if (errorMessage) {
  console.log(errorMessage)
} else {
  //console.log(JSON.stringify(results, undefined, 4));
  console.log(results.address);
  weather.getWeather(results.latitude, results.longitude,  (errorMessage, weatherResults) => {
    if (errorMessage) {
      console.log(errorMessage)
    } else {
       //console.log(JSON.stringify(weatherResults, undefined, 4));
       console.log(`It is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
    }
  });
}
});
