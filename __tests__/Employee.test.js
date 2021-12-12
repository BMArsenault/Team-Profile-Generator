const Employee = require('../lib/Employee');
const Index = require('../index');
const { TestWatcher } = require('jest');

jest.mock('../lib/Employee.js');

// test('creates an employee object', () => {
//     const employee = new Employee('Brian', '2', 'Brian@fakeemail.com', 'Employee');
  
//     expect(employee.name).toBe('Brian');
//     expect(employee.id).toBe('2');
//     expect(employee.email).toBe('Brian@fakeemail.com');
//     expect(employee.role).toBe('Employee');
//   });