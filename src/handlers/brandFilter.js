const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "..", "data", "data.json");

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
function getAllBrands(brandQuery, modelQuery) {
  try {
    const file = fs.readFileSync(filePath, { encoding: "utf-8" });
    const data = JSON.parse(file);
    let newArr = data.results
      .map((smartphone) => ({
        brand: smartphone.Brand,
        model: smartphone.Model,
      }))
      .filter(({ brand, model }) => {
        if (brandQuery && modelQuery) {
          return (
            brand &&
            brand.toLowerCase().startsWith(brandQuery.toLowerCase()) &&
            model.toLowerCase().indexOf(modelQuery.toLowerCase()) !== -1
          );
        } else {
          return (
            brand && brand.toLowerCase().startsWith(brandQuery.toLowerCase())
          );
        }
      });

    return { error: false, data: newArr };
  } catch (error) {
    return { error: true, message: error.message };
  }
}
// function brandFilter (data) {
//   let arr = []
//   const { results } = data
//   let nonDuplicated = []
//   for (let index of results) {
//     //console.log(index)
//     arr.push(index.Brand)
//   }

//   for (i = 0; i < arr.length; i++) {
//     if (nonDuplicated.indexOf(arr[i]) === -1) {
//       nonDuplicated.push(arr[i])
//     }
//   }

//   return nonDuplicated.sort()
// }
module.exports = getAllBrands;
