const range = (from, to) => {

    let arr = []
  
    for (from; from <= to; from++) {
      arr.push(from)
    }
    return arr
  }
  
  console.log(range(1, 10))
  console.log(range(5, 9))
  
  test('test range', () => {
    expect(range(1, 10)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  
  test('test range', () => {
    expect(range(5, 9)).toBe([5, 6, 7, 8, 9]);
  });