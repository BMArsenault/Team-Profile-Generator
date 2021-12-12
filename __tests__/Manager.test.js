const Manager = require('../lib/Manager');
const Index = require('../index');

jest.mock('../lib/Manager.js');

// test('creates a manager object', () => {
//     const manager = new Manager('Brian', '2', 'Brian@fakeemail.com', '555.555.5555', 'Manager');
//     console.log(manager.name);
//     expect(manager.name).toBe('Brian');
//     expect(manager.id).toBe('2');
//     expect(manager.email).toBe('Brian@fakeemail.com');
//     expect(manager.officeNumber).toBe('555-555-5555');
//     expect(manager.role).toBe('Manager');
//   });