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
    }, 2000);
  });
}

export default getResponseFromAPI;
