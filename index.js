const employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log("Original employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "456 Elm St"
);
console.log("Updated employee (non-destructive):", updatedEmployee);
console.log("Original employee remains unchanged:", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log("Employee after destructive update:", employee);

const newEmployeeAfterDelete = deleteFromEmployeeByKey(
  employee,
  "streetAddress"
);
console.log(
  "New employee after non-destructive delete:",
  newEmployeeAfterDelete
);
console.log(
  "Employee remains unchanged after non-destructive delete:",
  employee
);

destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Employee after destructive delete:", employee);
