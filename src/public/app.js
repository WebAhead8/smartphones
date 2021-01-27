const getI = document.getElementById('brands')
const modelID = document.getElementById('model')
getI.addEventListener('keyup', event => {
  fetch('http://localhost:5000/autocomplete', {
    method: 'POST',
    body: JSON.stringify({
      word: event.target.value
    })
  })
    .then(response => response.json())
    .then(data => {
      getInput(data)
    })
})

modelID.addEventListener('keyup', event => {
  fetch('http://localhost:5000/autocomplete', {
    method: 'POST',
    body: JSON.stringify({
      word: getI.value,
      model: event.target.value
    })
  })
    .then(response => response.json())
    .then(data => {
      getInput(data, true)
    })
})

// fetch("http://localhost:5000/getsmartphone")
//     .then(response => response.json())
//     .then(data => {
//         getInput(data)
//     } )

function getInput (data, withModel) {
  const arr = data.data
  document.getElementById('brands-smart').innerHTML = ''
  const uniqueBrand = new Set(data.data.map(({ brand }) => brand))
  Array.from(uniqueBrand).forEach(brand => {
    const option = document.createElement('option')

    option.value = brand
    option.textContent = brand
    document.getElementById('brands-smart').appendChild(option)
  })

  if (withModel) {
    const uniqueModel = new Set(data.data.map(({ model }) => model))
    Array.from(uniqueModel).forEach(brand => {
      const option = document.createElement('option')

      option.value = brand.replace('_', '')
      option.textContent = brand.replace('_', '')
      document.getElementById('models-smart').appendChild(option)
    })
  }
}
