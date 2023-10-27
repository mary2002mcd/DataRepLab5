//variables
const express = require('express')//installed express
const app = express()
const port = 4000
const bodyParser = require('body-parser'); //installed bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//there is one sever and one client

//you can have multiple inputs on one page by using other htttp get/post methods
app.post('/name', (req, res)=>{
    res.send("Hello "+ req.body.fname+" "+req.body.lname);
})

//IMPORTANT FOR TEST!!!!  -- WITH HTML FORM
app.get('/name', (req, res) =>{
    res.send('Hello '+req.query.fname + " "+ req.query.lname);
})

//route /test that will get the information from index.html from the absolute file path
app.get('/test', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

// a route point /api/books that will return json data
app.get('/api/books', (req, res) => {
    //json data
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];


    res.json({
        myBooks: data ,
        "Message": "Hello from server.js!"
    })
})
//localhost:4000
app.get('/', (req, res) => {
    res.send('Hello World 1!');
})
//get request - localhost:4000/whatever
app.get('/whatever', (req, res) => {
    res.send('Goodbye!');
})
//another get
app.get('/datarep', (req, res) => {
    res.send("Welcome to Data Representation & Quering");
})
///:name - name is a parameter that is passed in through the url eg localhost:4000.hello/mary
app.get('/hello/:name', (req, res) => {
    res.send("Hello " + req.params.name);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})