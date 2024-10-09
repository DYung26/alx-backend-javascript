#!/usr/bin/node

/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author DYung26 <https://github.com/DYung26>
 * @returns
 */
export default function getListStudentIds(objectsList) {
  if (objectsList instanceof Array) {
    return objectsList.map((object) => object.id);
  }
  return [];
}
