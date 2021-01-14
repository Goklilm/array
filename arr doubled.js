const doubled = (arr) => {
  
    let array = []
    
    for (i = 0; i < arr.length; i++) {
    
    arr1.push(arr[i] * 2)
    }
    
    return array
  }
  
  console.log(doubled([1, 2, 3, 4])) // => [2, 4, 6, 8]
  console.log(doubled([5, 5])) // => [10, 10]