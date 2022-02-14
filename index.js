const express = require('express');
const cors = require('cors');
const time = require('./time');

//setup server
const server = express();
const PORT = process.env.PORT || 8000;

//middelwares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));


//get counidown (from now to a future date)
server.post('/countdown',(req,res) =>
{
    time.time_CountDown(req,res)
})


//listen to server
server.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT http://localhost:${PORT}`);
})