#!/usr/bin/node

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('Data fetched successfully');
    } else {
      reject('Error: failed to fetch data');
    }
  });
}
