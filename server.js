require('dotenv/config');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGO_URL_LOCAL)
// .then(()=> console.log("Connected to MOngoDB"))
// .catch((err)=> console.log("Connection Failed"));

mongoose.connection.on('error', (err)=>{
    console.log("connected failed");
});

mongoose.connection.on("connected",(connected)=>{
    console.log("connected to mongo success");
});

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})