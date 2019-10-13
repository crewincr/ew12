var express = require('express'); 
const bodyparser = require('body-parser');
var app = express(); 
var PORT = process.env.PORT || 5000;
  
// Set EJS as templating engine
app.use(bodyparser.urlencoded({extended:true})); 
app.set('view engine', 'ejs');

app.use(express.static('public'));

var server = app.listen(PORT, function(){ 
    console.log('listining to port '+PORT) 
});

app.get('/', (req, res)=>{ 
    res.render('home'); 
});

app.get('/panel', (req, res)=>{ 
    res.render('panel'); 
});

app.get('/login', (req, res)=>{ 
    res.render('login');
});

app.get('/register', (req, res)=>{ 
    res.render('register');
});

app.get('/forget', (req, res)=>{ 
    res.render('forgot_password');
});

app.post('/logins',(req,res)=>{
    console.log(req.body.username);
    res.send("Success"+" Hello "+req.body.username);
});