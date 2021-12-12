const Engineer = require('../lib/Engineer');


test('Can get name via getName()', () => {
  const testValue = "Brian";
  const t = new Engineer(testValue, 1, "brian@fakeemail.com");
  expect(t.getName()).toBe(testValue);
});

test('Can get ID via getId()', () => {
  const testValue = "311";
  const e = new Engineer("Brian", testValue);
  expect(e.getId()).toBe(testValue);
});

test('Can get Email via getEmail()', () => {
  const testValue = "test@test.com";
  const e = new Engineer("Brian", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('Can get Github username via getGithub()', () => {
  const testValue = "TestGithub";
  const e = new Engineer("Brian", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return engineer', () => {
  const testValue = "Engineer";
  const e = new Engineer("Brian", 1, testValue);
  expect(e.getRole()).toBe(testValue);
});