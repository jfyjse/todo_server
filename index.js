const exprss=require('express')
const app= exprss()
const session = require('express-session')
const dataser= require('./service/data.service')
const cors= require('cors')
const db = require('./service/db')
const { json } = require('express')

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
       
        res.json({
            result
        })
       
    })
})

app.get('/update/:id',(req,res) =>{
    _id=req.params.id;
    db.Todo.findByIdAndUpdate(_id,{doneStatus:true}).then(dat =>{
        res.json({dat})
    })
})

app.delete('/delete/:id',(req,res)=>{
    _id=req.params.id;
    db.Todo.findByIdAndDelete(_id).then(dat =>{
        res.json({dat})
    })
})

app.listen(8000,()=>{
    console.log("started listening");
    
})


// console.log(result);

// app.get('/getdata',(req,res) => {
    //     res.json({
//         "status":200,
        
//     })
// });



// app.get('/update/:id',(req,res)=>{
//   db.Todo.find({"_id":req.params.id}).then(ress =>{
//  var data = ress;
//     // res.json({
//     //       ress
//     //   })
//     // res.send(ress);
//     console.log(data);
    
// });


// })
