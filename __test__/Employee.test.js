// unit test for Employee class/constructor

// import Employee module
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// test name, id, & email Employee properties
test ('creates an Employee object', () => {
    const employee = new Employee('Jenny', 80, 'fake@gmail.com');
    //expect employee's name to be a string
    expect(employee.name).toEqual(expect.any(String));
    //expect employee's id to be a number
    expect(employee.id).toEqual(expect.any(Number));
    //expect employee's email to be a string
    expect(employee.email).toEqual(expect.any(String));
});

// test getName() method
test('gets name of employee', () => {
    const employee = new Employee('name');
    expect(employee.getName()).toEqual(expect.stringContaining('name'));
});
// test getID() method
test('gets ID of employee', () => {
    const employee = new Employee('name', 'id', 'email');
    expect(employee.getID()).toEqual(expect.stringContaining('id'));
});

// test getEmail() method
test('gets email of employee', () => {
    const employee = new Employee('name', 'id', 'email');
    expect(employee.getEmail()).toEqual(expect.stringContaining('email'));
});

// test getRole() method
test('gets role of employee', () => {
    const employee = new Employee();
    expect(employee.getRole()).toEqual('Employee');
});