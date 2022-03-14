const EventEmitter = require ('events');
const { fstat } = require('fs');
const emitter = new EventEmitter();
const fs = require('fs');
const path = require ('path').parse ('/users/test.txt');
const os = require ('os');
const http = require ('http');
const _ = require ('underscore');
const csv = require('csv-parser');
const express = require('express')
const app = express();

app.use(express.json());


const port = process.env.PORT || 5000
app.listen (port, () => console.log ('listening on port ${port}...'))

        // app.get ('./', (req,res) => {
        //     res.send ('Hello World');
        // })

        // app.get('/api', (req,res) => {
        //     res.send ([1,2,3]);
        // })

        // app.get ('./api/courses/:id', (req,res) => {
        //     res.send ('req.params.id');
        // })

        // app.get ('./api/post/:year/:month', (req,res) => {
        //     res.send ('req.query.');
        // })

app.get('/', (req,res) => {
    res.send("nodemon - for monitoring changes")
})

const courses = [
    {id: 1, name: "js"},
    {id: 2, name: "js"},
    {id: 3, name: "js"},
]

app.get ('/api/courses', (req,res) => {
    res.send (courses);
})

app.get ('/api/courses/:id', (req, res) => {
    res.send(courses);
})

app.get ('/api/courses/:id', (req, res) => {
    const my_course = courses.find(course => course.id === ParseInt(req.params.id));
    if(!my_course) req.statusCode(404).send("not found");
    res.send(my_course);
})


fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
});

const server = http.createServer((req,res) => {
    //handle every single req with this callback
})

var totalMemory = os.totalmem();
var freeMemmory = os.freemem()

console.log('Total Memory: ' + totalMemory);

//template string
// es6/es2915 : ECMAscript 6

console.log ('Total Memory: ${totalMemory}');
console.log ('Free Memory: ${freeMemory}');

try{
    fs.unlikSync ('./tmp/hello');
    console.log('successfully deleted /tmp/hello');

}catch (err) {
    //handle the error
}

fs.readdir('./', function(err, files) {
 if(err) console.log("Error", err);
 else console.log("Result", files)
});


//registrer a listener, need to be on first place than .emit()

emitter.on('messageLogged', (eventArg) => {
    console.log("Listener called", eventArg );
});
emitter.emit('messageLogged', {id:1, url:"http://"});

