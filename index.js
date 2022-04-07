const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (newEmployee, key, value) {
    newEmployee[key] = value;
    return newEmployee;
}

function deleteFromEmployeeByKey(object, key) {
    const newObj = {...object}
    delete newObj[key]
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}

// Write your solution in this file!
