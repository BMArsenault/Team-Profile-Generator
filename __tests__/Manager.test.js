const Manager = require('../lib/Manager');

test('Can get name via getName()', () => {
    const testValue = "Brian";
    const t = new Manager(testValue, 1, "brian@fakeemail.com");
    expect(t.getName()).toBe(testValue);
});

test('Can get ID via getId()', () => {
    const testValue = "311";
    const e = new Manager("Brian", testValue);
    expect(e.getId()).toBe(testValue);
});

test('Can get Email via getEmail()', () => {
    const testValue = "test@test.com";
    const e = new Manager("Brian", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('Can get office number via getOfficeNumber()', () => {
    const testValue = "555-555-5555";
    const e = new Manager("Brian", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return Manager', () => {
    const testValue = "Manager";
    const e = new Manager("Brian", 1, testValue);
    expect(e.getRole()).toBe(testValue);
});