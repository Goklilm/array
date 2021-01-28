const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = num.filter(num => num % 2 === 0);

console.log(result);
test('test filter even', () => {
    expect(console.log).toBe([0, 2, 4, 6, 8, 10]);
  });