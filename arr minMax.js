const minMax = (arr) => {
    let min = arr[0]
    let max = arr[5] //nebeshe tolkos trudno
    console.log(min, max)
  }
  
  minMax([1, 2, 3, 4, 5]) // => [1, 5]
  minMax([1, 1, 1, 1, 1]) // => [1, 1]
  
  test('test min max', () => {
    expect(minMax([1, 2, 3, 4, 5])).toBe([1, 5]);
  });
  test('test min max#2', () => {
    expect(minMax([1, 1, 1, 1, 1])).toBe([1, 1]);
  });


