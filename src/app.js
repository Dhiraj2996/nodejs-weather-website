const path= require('path')
const express= require('express')
const hbs= require('hbs')
const getWeather=require('./utils/getWeather')

const app=express()
const port= process.env.PORT || 3000

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const viewFolder=path.join(__dirname,'../templates/views')
const partialFolder=path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set("view engine","hbs")
app.set("views",viewFolder)
hbs.registerPartials(partialFolder)


//setup static path
app.use(express.static(path.join(__dirname,'../public')))


app.get('',(req,res)=>{
    res.render('index',{
        title: "Weather App",
        name :"DM"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: "About",
        name :"DM"
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title: "Help",
        helpMsg :"Lets notch",
        name: "DM"
    })
})
app.get('/weather',(req,res)=>{
    const {location}=req.query
    if(location==undefined)
        return res.send({
            error: "Please provide location in query"
        })
    
    getWeather(location,(error,data={})=>{
    if(error){
        res.send({
            error:error 
        })
    }
    else{
        res.send(data)
    }
    })
    
})



app.get("*",(req,res)=>{
    res.render("error",{
        title: "Page not found error",
        errorMessage: "Andha hai kya?",
        name: "DM"
    })
})

app.listen(port,()=>{
    console.log("Server is up on port ",port);
})


