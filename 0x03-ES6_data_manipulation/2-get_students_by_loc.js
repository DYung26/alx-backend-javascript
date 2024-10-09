#!/usr/bin/node

/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @author DYung26 <https://github.com/DYung26>
 * @returns
 */
export default function getStudentsByLocation(studentsList, city) {
  if (studentsList instanceof Array) {
    return students.filter((studentsList) => studentsList.location === city);
  }
  return [];
}
