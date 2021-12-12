const Intern = require('../lib/Intern');
const Index = require('../index');

jest.mock('../lib/Intern.js');

// test('creates an intern object', () => {
//     const intern = new Intern('Brian', '2', 'Brian@fakeemail.com', '555.555.5555', 'Intern');
  
//     expect(intern.name).toBe('Brian');
//     expect(intern.id).toBe('2');
//     expect(intern.email).toBe('Brian@fakeemail.com');
//     expect(intern.officeNumber).toBe('555-555-5555');
//     expect(intern.role).toBe('Intern');
//   });