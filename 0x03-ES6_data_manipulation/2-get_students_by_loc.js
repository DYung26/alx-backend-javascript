#!/usr/bin/node

export default function getStudentsByLocation(studentsList, city) {
  if (studentsList instanceof Array) {
    return students.filter((studentsList) => studentsList.location === city);
  }
  return [];
}
