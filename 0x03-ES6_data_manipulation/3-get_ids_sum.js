#!/usr/bin/node

export default function getStudentIdsSum(studentsList) {
  if (studentsList instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
}
