const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
// const bodyParser = require('body-parser');

const postRoute = require('./routes/posts.route');
const port = 8080;

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', postRoute);

//connect mongodb
//using mongose
let uri = process.env.MONGO_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).catch( err => console.log(err + ''))

//routes
app.get('/', (req, res) => {
	res.send('Here we go!!!')
})

app.listen(port);