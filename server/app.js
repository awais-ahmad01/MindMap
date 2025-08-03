const app = require('express')();

const dotenv = require('dotenv');
dotenv.config();
const session = require('express-session');
const passport = require('passport');
require('./config/passport');



const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth-routes');
const journalRoute = require('./routes/journal-routes');



mongoose.connect('mongodb+srv://aahmad19376:bb9kod5mHy0vABrr@cluster0.e5ghlsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST', 
}));
app.use(bodyParser.json());


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(authRoute)

app.use(journalRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});