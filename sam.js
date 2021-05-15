app.get('/api/courses/:id',(req,res)=>{
    console.log(res);
 const cours =  courses.find(c => c.id === parseInt( req.params.id));
  if(!cours) res.status(404).send("not found");
  res.send(cours);
});

app.put('/api/courses/:id',(req,res)=>{
    const cours =  courses.find(c => c.id === parseInt( req.params.id));
    if(!cours) res.status(404).send("not found"); 

    // const result=validateCourse(req.body);

    // const { error} =validateCourse(req.body);

    //   if(error){
    //     res.status(400).send(error.details[0].message);
    //     return;
    // }
    cours.name=req.body.name;
    res.send(cours);
});