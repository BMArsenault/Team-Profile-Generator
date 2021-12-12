const Engineer = require('../lib/Engineer');
const Index = require('../index');

jest.mock('../lib/Engineer.js');

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

test('creates a new employee github username', () => {
    const employeeGithub = new EmployeeGithub('BrianGithub');
    expect(employee.email).toBe('BrianGithub');
})

test('creates a new "employee" role', () => {
    const employeeRole = new EmployeeRole('Engineer');
    expect(employee.role).toBe('Engineer');
})