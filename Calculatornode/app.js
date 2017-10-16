const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

/*
app.get('/', (req, res) => {
    res.render('home');
});
*/

app.post('/operation', (req,res) =>{

    const Number1 = req.body.num1;
    const Number2 = req.body.num2;

    res.send(Number1 + "   " + Number2);

});

app.locals.Number3 = 0;

app.post('/add', (req,res) =>{

    const Number1 = req.body.num1;
    const Number2 = req.body.num2;
    var Number3 = (parseInt(Number1)+parseInt(Number2));

    res.render('home',{
        Number3: Number3
    });

});



app.post('/sub', (req,res) =>{

    const Number1 = req.body.num1;
    const Number2 = req.body.num2;
    var Number3 = (Number1-Number2);
    res.render('home',{
        Number3: Number3
    });

    //res.send(Number1 + "  -  " + Number2 + " = " + Number3);

});

app.post('/div', (req,res) =>{

    const Number1 = req.body.num1;
    const Number2 = req.body.num2;
    var Number3 = (Number1/Number2);
    if (Number2 === 0){

        res.render('home',{
            Number3: "Cannot divide by zero"
        });
    }
    else {
        res.render('home', {
            Number3: Number3
        });
    }

});

app.post('/mul', (req,res) =>{

    const Number1 = req.body.num1;
    const Number2 = req.body.num2;
    var Number3 = (Number1*Number2);
    res.render('home',{
        Number3: Number3
    });

});

app.listen(4000, () =>{
    console.log("Server started on 4000");
})
