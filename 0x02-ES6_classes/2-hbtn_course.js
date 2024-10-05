export default class HolbertonCourse {
  constructor(
    name, length, students
  ) {
    if (typeof name === 'string') {
      this._name = name;
    }

    if (typeof length === 'number') {
      this._length = length;
    }

    if (typeof students === 'string[]')
      this._students = students;
    }

    get name() {
      return this._name;
    }

    set name(newName) {
      this._name = newName;
    }

    get length() {
      return this._length;
    }

    set length(newLength) {
      this._length = newLength;
    }

    get students() {
      return this._students;
    }

    set students(newStudents) {
      this._students = newStudents;
    }
  }
}
