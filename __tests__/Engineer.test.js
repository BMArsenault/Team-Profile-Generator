const Engineer = require('../lib/Engineer');
const Index = require('../index');

jest.mock('../lib/Engineer.js');

// test('creates an engineer object', () => {
//     const engineer = new Engineer('Brian', '2', 'Brian@fakeemail.com', 'BrianGithub', 'Engineer');
  
//     expect(engineer.name).toBe('Brian');
//     expect(engineer.id).toBe('2');
//     expect(engineer.email).toBe('Brian@fakeemail.com');
//     expect(engineer.github).toBe('BrianGithub');
//     expect(engineer.role).toBe('Engineer');
//   });