const concat = ([1, 'cat', 3, 4, 5])

console.log(concat.join('')) // => '1cat345'
test('test concat', () => {
    expect(console.log).toBe('1cat345');
  });