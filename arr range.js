const range = (from, to) => {

    let arr = []
  
    for (from; from <= to; from++) {
      arr.push(from)
    }
    return arr
  }
  
  console.log(range(1, 10))
  console.log(range(5, 9))
  