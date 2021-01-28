const arr = [1, 2, 3, 4, 5];
const sum = (acc, value) => acc + value;


console.log(arr.reduce(sum));

test('test sum(reduce)', () => {
    expect(console.log).toBe([15]);
  });