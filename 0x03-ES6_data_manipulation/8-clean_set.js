#!/usr/bin/node

/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author DYung26 <https://github.com/DYung26>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const chars = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubString = value.substring(startString.length);

      if (valueSubString && valueSubString !== value) {
        chars.push(valueSubString);
      }
    }
  }
  return chars.join('-');
}
