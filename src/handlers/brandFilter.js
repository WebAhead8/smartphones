const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "..", "data", "data.json");

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

module.exports = getAllBrands;
