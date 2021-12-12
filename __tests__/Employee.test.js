const Employee = require('../lib/Employee');
const Index = require('../index');
const { TestWatcher } = require('jest');

jest.mock('../lib/Employee.js');

test('creates a new employee object', () => {
    const employee = new Employee('Brian');
    expect(employee.name).toBe('Brian');
})

test('creates a new ID object', () => {
    const employeeId = new EmployeeID('22');
    expect(employee.id).toBe('22');
})

test('creates a new employee email', () => {
    const employeeEmail = new EmployeeEmail('Brian@fakeemail.com');
    expect(employee.email).toBe('Brian@fakeemail.com');
})

test('creates a new "employee" role', () => {
    const employeeRole = new EmployeeRole('Employee');
    expect(employee.role).toBe('Employee');
})
