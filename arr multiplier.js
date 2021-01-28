const multiplier = (arr) => {

    let arr1 = []
  
    for (i = 0; i < arr.length; i++) {
  
      arr1.push(arr[i] * arr[i])
  
    }
  
    return arr1
  }
  
  console.log(multiplier([1, 2, 3, 4]))
  console.log(multiplier([5, 5])) 
  
  test('test multiplier', () => {
    expect(multiplier([1, 2, 3, 4])).toBe([1, 4, 9, 16]);
  });
  
  test('test multiplier', () => {
    expect(multiplier([5, 5])).toBe([25, 25]);
  });
  