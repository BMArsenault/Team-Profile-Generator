const Manager = require('../lib/Manager');
const Index = require('../index');

jest.mock('../lib/Manager.js');

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

test('creates a new employee office number', () => {
    const employeeOfficeNumber = new EmployeeOfficeNumber('555-555-5555');
    expect(employee.email).toBe('555-555-5555');
})

test('creates a new "employee" role', () => {
    const employeeRole = new EmployeeRole('Manager');
    expect(employee.role).toBe('Manager');
})