const exprss=require('express')
const app= exprss()
const session = require('express-session')
const dataser= require('./service/data.service')
const cors= require('cors')

app.use(cors({
    origin: "http://localhost:4200",
    credentials: true
}))

app.use(exprss.json());

app.use(session(
    {
        secret:'randomsecurestring',
        resave:false,
        saveUninitialized:false
    })
    )

    app.get('/',(req,res)=>{
        res.status(222).send("get methd updated")
    })


    app.post('/addata',(req,res)=>
    {
       
        dataser.add(req.body.idd,req.body.data,req.body.order,req.body.doneStatus)
        .then(result=>{res.status(result.statusCode).json(result)
        })
        
        

        
    })

app.get('/getdata',(req,res)=>{
    dataser.getData().then(result =>{
        // console.log(result);
        // let data = result;
        res.json({
            result
        })
        // res.status(result.statusCode).json(result)
    })
})

// app.get('/getdata',(req,res) => {
//     res.json({
//         "status":200,
        
//     })
// });



app.listen(8000,()=>{
    console.log("started listening");
    
})
