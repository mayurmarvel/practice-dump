const express =  require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;



const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); //accepting only json data


app.get('/', (req,res)=>{
    res.json({
        message: 'Welcome to My Api'
    })


}) 

app.post('/post', (req,res)=>{

    // console.log(req.body);
    res.send("Received")


}) 




app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);
})

