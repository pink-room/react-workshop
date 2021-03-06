const API_URL = 'https://api.imgflip.com/';

// get memes from https://api.imgflip.com/get_memes
export function getPopularMemes() {
  return request('get_memes');
}

// request to create a meme at https://api.imgflip.com/caption_image
export function createMeme(templateID, upperText, lowerText) {
  return request('caption_image', {
    template_id: templateID,
    text0: upperText,
    text1: lowerText,
    username: "react-workshop",
    password: "react.workshop"
  });
}

// A helper function to create URL GET strings from a javascript object, and then fetch data from the server
function request(endpoint, params = {}) {
  const paramStr = Object.keys(params)
    .map(k => `${k}=${params[k]}`)
    .join('&');
  const url = `${API_URL}/${endpoint}?${paramStr}`;
  return fetch(url).then(response => response.json());
}
