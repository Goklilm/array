const numbers = [1, 69, 420]
const contains = (element, arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true
    }
  }
  return false
}
console.log(contains(69, numbers)) // => true
console.log(contains(666, numbers)) // => false

test('test countains', () => {
  expect(contains(69, numbers)).toBe(true);
});

test('test countains', () => {
  expect(contains(666, numbers)).toBe(false);
});