const API_URL = 'https://api.imgflip.com/';

// get data from http://version1.api.memegenerator.net/Generators_Select_ByPopular
export function getPopularImages() {
  return request('get_memes');
}

// request to create a meme at http://version1.api.memegenerator.net/Instance_Create?generatorID=74&languageCode=en&text0=I%20don%27t%20always%20make%20memes&text1=but%20when%20I%20do%20it%27s%20at%20a%20workshop
export function createMeme(generatorID, text0, text1) {
  return request('Instance_Create', {
    languageCode: 'en',
    generatorID,
    text0,
    text1
  });
}

// A helper function to create URL GET strings from a javascript object, and then fetch data from the server
function request(endpoint, params = {}) {
  const paramStr = Object.keys(params)
                         .map((k) => `${k}=${params[k]}`)
                         .join('&');
  const url = `${API_URL}/${endpoint}?${paramStr}`;
  return fetch(url).then((response) => response.json());
}
