const request=require("postman-request")

const getWeather = (place,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=dcd483ffb3a9e525a80ce2d62d3da7f0&query="
        +place
    debugger
    request(url,(error,response)=>{
        if(error){
            callback("Error while getting weather details",undefined)
            return
        }
        const bodyvar=JSON.parse(response.body)
        if(bodyvar.error){
            callback("Error while getting location details",undefined)

        }
        else{
            callback(undefined,bodyvar.current)
        }
    })
}
module.exports=getWeather