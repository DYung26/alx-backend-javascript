#!/usr/bin/node

export default function getListStudentIds(objectsList) {
  if (objectsList instanceof Array) {
    return objectsList.map((object) => object.id);
  }
  return [];
}
