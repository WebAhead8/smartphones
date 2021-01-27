function brandFilter (data) {
  let arr = []
  let nonDuplicated = []
  for (let index of data) {
    //console.log(index)
    arr.push(index.Brand)
    
  }

  for (i = 0; i < arr.length; i++) {
    if (nonDuplicated.indexOf(arr[i]) === -1) {
      nonDuplicated.push(arr[i])
    }
  }

  console.log(nonDuplicated.sort())
  console.log(nonDuplicated.length)
}
module.exports = brandFilter
