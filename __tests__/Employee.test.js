const Employee = require('../lib/Employee');

test('Can get name via getName()', () => {
    const testValue = "Brian";
    const t = new Employee(testValue, 1, "brian@fakeemail.com");
    expect(t.getName()).toBe(testValue);
});

test('Can get ID via getId()', () => {
    const testValue = "311";
    const e = new Employee("whatever", testValue);
    expect(e.getId()).toBe(testValue);
});

test('Can get Email via getEmail()', () => {
    const testValue = "test@test.com";
    const e = new Employee("whatever", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return employee', () => {
    const testValue = "Employee";
    const e = new Employee("Brian", 1, testValue);
    expect(e.getRole()).toBe(testValue);
});