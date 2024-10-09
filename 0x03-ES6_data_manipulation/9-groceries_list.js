#!/usr/bin/env node

/**
 * Retrieves a map of grocery names and their quantity.
 * @author DYung26 <https://github.com/DYung26>
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const fruits = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(fruits);
}
