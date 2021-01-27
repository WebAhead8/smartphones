
const getI = document.getElementById("brands");

fetch("http://localhost:5000/getsmartphone")
    .then(response => response.json())
    .then(data => {
        getInput(data)
    } )

function getInput(data){
    const arr = data.data
    for (let i =0; i<arr.length; i++){
        const option =document.createElement("option");
        
        console.log(arr)
        option.value=arr[i];
        option.textContent=arr[i];
        document.getElementById('brands-smart').appendChild(option);
        
    }



}

// getI.addEventListener("keyup",event=>{
    //     data.startsWith(getI.value);
    // })