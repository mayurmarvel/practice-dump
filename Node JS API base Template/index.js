const express =  require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { nextTick } = require('process');
const { error } = require('console');

const PORT = process.env.PORT || 3000;


const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); //accepting only json data
// app.use(express.urlencoded());  //accept url encoded data


app.get('/', (req,res)=>{
    res.json({
        message: 'Welcome to My Api'
    })


}) 

app.post('/post', (req,res,next)=>{

    console.log(req.body);

    try{

        res.send("Received")


    }catch(error){

    next(error);

    }

    
}) 


app.use((error,req,res,next) => {
    if(error.status){
        res.status(error.status);
    } else {
        res.status(500);
    }
    res.json({
        message: error.message,
        stack: error.stack
    })
})



app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);
})

