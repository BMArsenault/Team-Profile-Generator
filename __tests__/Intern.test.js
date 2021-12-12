const Intern = require('../lib/Intern');
const Index = require('../index');

jest.mock('../lib/Intern.js');

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

test('creates a new employee school', () => {
    const employeeSchool = new EmployeeSchool('Columbia');
    expect(employee.email).toBe('Columbia');
})

test('creates a new "employee" role', () => {
    const employeeRole = new EmployeeRole('Intern');
    expect(employee.role).toBe('Intern');
})