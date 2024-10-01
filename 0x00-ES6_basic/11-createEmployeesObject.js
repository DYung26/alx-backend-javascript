#!/usr/bin/env node

export default function createEmployeesObject(departmentName, employees) {
  const object = {
    [`${departmentName}`]: employees
  };
  return object;
}
