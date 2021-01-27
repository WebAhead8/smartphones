const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, '..', 'data', 'data.json')

// function getAllBrands () {
//     console.log("getbrands start")
//     let a = 'aaa'
//    fs.readFile(filePath, { encoding: 'utf-8' }, (err, file) => {
//     if (err) {
//       return { error: true, message: erorr.message }
//     } else {
//         a =  brandFilter(JSON.parse(file))
//       return { error: false, data: brandFilter(JSON.parse(file)) }
//     }
//   });
//   return a
// }
function getAllBrands () {
    try {
        const data = fs.readFileSync(filePath, { encoding: 'utf-8' })
        return {error: false, data: brandFilter(JSON.parse(data))}
    } catch (error) {
        return {error: true,message: error.message}
    }
}

function brandFilter (data) {
  let arr = []
  const { results } = data
  let nonDuplicated = []
  for (let index of results) {
    //console.log(index)
    arr.push(index.Brand)
  }

  for (i = 0; i < arr.length; i++) {
    if (nonDuplicated.indexOf(arr[i]) === -1) {
      nonDuplicated.push(arr[i])
    }
  }

  return nonDuplicated.sort()
}
module.exports = getAllBrands
