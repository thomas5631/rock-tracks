export default () => new Promise((resolve, reject) => {
  fetch('https://itunes.apple.com/search?term=rock&media=music').then((response) => {
    response.json().then((data) => {
      resolve(data.results);
    });
  }).catch((err) => {
    reject(err);
  });
});
