#!/usr/bin/node

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Error failed to fetch data.');
      }
    }, 0);
  });
}

export default getResponseFromAPI;
