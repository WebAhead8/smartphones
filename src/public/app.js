const getI = document.getElementById('brands')
getI.addEventListener('keyup', event => {
  fetch('http://localhost:5000/autocomplete', {
    method: 'POST',
    body: {
      word: event.target.value
    }
  })
    .then(response => response.json())
    .then(data => {
      getInput(data)
    })
})

// fetch("http://localhost:5000/getsmartphone")
//     .then(response => response.json())
//     .then(data => {
//         getInput(data)
//     } )

function getInput (data) {
  const arr = data.data
  for (let i = 0; i < arr.length; i++) {
    const option = document.createElement('option')

    console.log(arr)
    option.value = arr[i]
    option.textContent = arr[i]
    document.getElementById('brands-smart').appendChild(option)
  }
}
