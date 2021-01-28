const zip = (arr1, arr2) => {

    let arr3 = []
  
    for (i = 0; i < arr1.length; i++) {
  
      arr3.push([arr1[i], arr2[i]])
  
    }
  
    return arr3
  
  }
  
  console.log(zip([1, 2, 3], [4, 5, 6])) // => [[1, 4], [2, 5], [3, 6]]
  test('test zip', () => {
    expect(zip([1, 2, 3], [4, 5, 6])).toStrictEqual([ [1, 4], [2, 5], [3, 6] ]);
  });