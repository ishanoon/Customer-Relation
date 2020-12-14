const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const clientRouter = require('./routes/clientRoute');
const noteRouter = require('./routes/noteRoute');

mongoose.connect('mongodb://localhost:27017/DB-CRM',{ useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connection.on('connected', function(err,connected){
    console.log(`connected to mongodb successfully`)
});
mongoose.connection.on('error', function(err,connected){
    if(err){console.log(`connection failed with ${err}`)}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/user', userRouter);
app.use('/client', clientRouter);
app.use('/note', noteRouter);


const PORT = 3000 || process.env.PORT

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
})

module.exports = app