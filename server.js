const express = require('express')
const app = express()

app.use(express.static('public'));
 
app.listen(3333, function(){
 console.log("Listening on 3333....");
});