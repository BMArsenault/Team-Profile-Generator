const Intern = require('../lib/Intern');

test('Can get name via getName()', () => {
  const testValue = "Brian";
  const t = new Intern(testValue, 1, "brian@fakeemail.com");
  expect(t.getName()).toBe(testValue);
});

test('Can get ID via getId()', () => {
  const testValue = "311";
  const e = new Intern("Brian", testValue);
  expect(e.getId()).toBe(testValue);
});

test('Can get Email via getEmail()', () => {
  const testValue = "test@test.com";
  const e = new Intern("Brian", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = "Columbia";
  const e = new Intern("Brian", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return intern', () => {
  const testValue = "Intern";
  const e = new Intern("Brian", 1, testValue);
  expect(e.getRole()).toBe(testValue);
});