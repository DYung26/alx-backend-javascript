#!/usr/bin/node

/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} studentsList - The list of students.
 * @author DYung26 <https://github.com/DYung26>
 * @returns {Number}
 */
export default function getStudentIdsSum(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
