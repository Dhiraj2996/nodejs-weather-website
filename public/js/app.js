console.log("Loaded client side js");


const url="http://localhost:3000/weather?location="



const weatherForm=document.querySelector('form')
const searchElement=document.querySelector('input')
const message=document.querySelector('#message')
message.textContent="Results"
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=searchElement.value
    console.log(location)
    message.textContent="Loading..."
    fetch(url+location).then((res)=>{
        console.log(res)
        res.json().then((data)=>{

            console.log(data);
            message.textContent="Temp::" +data.temperature +" Weather:"+data.weather_descriptions;
        })
    })
})