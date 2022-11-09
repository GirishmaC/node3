const express = require("express");
const PORT = 3000;
const app = express();
const middleWare1 = (req,res,next) => {
    console.log("Hloo Middleware1");
    next();
}
const middleWare2 = (req,res,next) => {
    console.log("Hloo  Middleware12");
    next();
}
app.use(middleWare1);
app.get('/', (req,res)=>{
    res.send('Intro to middleware');
})
app.get('/main', (req,res)=>{
    res.send('Middleware');
})
app.get('/home',middleWare2, (req,res)=>{
    res.send('<h3>Welcome to Home</h3>');
})
app.get('/contact',middleWare2, (req,res)=>{
    res.send('<h2>Please Contact Us On :</h2> <h3>9090909090</h3> ');
})

app.listen(PORT,()=>{
    console.log('server is connected');
})