const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, function(error, res, body) {
  if (error) {
    console.log('Failed to request details:', error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Breed not found');
  } else {
    console.log('statusCode:', res && res.statusCode);
  
    // const data = JSON.parse(body);
  
    const breedInfo = data[0];
    console.log(breedInfo);
    const weight = breedInfo.weight;
    console.log(weight);
  }
});

