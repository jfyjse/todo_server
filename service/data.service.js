const db = require('./db')

const add =(idd, data, order, doneStatus) => {
    console.log("add section");

    return db.Todo.find().then(o => {

      if(o)
      {
          const newData = new db.Todo({
            idd,
            data,
            order,
            doneStatus
          })
    
          newData.save()
    
          return {
            status: true,
            statusCode: 200,
            message: "added data"
          }
        }


        // console.log(o);
        // if (o) {
        //   return {
        //     status: false,
        //     statusCode: 445,
        //     message: "duplicate data"
        //   }
    
        // }
    
        // else {
        //   const newData = new db.Todo({
        //     idd,
        //     data,
        //     order,
        //     doneStatus
        //   })
    
        //   newData.save()
    
        //   return {
        //     status: true,
        //     statusCode: 200,
        //     message: "added data"
        //   }
        // }


      })


}

todo1=[];

const getData =() => {
  
  console.log("get start");

  return db.Todo.find().then(o => {
      console.log(o);
      // return  {
      //   data:o
      // }

      if (o) {
        // console.log(o[2].data);
        return {
          status: true,
          statusCode: 200,
          message: "from db success",
          todoData:o
          
        }
  
      }
  
      else {
          return {
          status: false,
          statusCode: 455,
          message: "no data",
          todoData:[]
        }
      }
    })

}

// const update()
  

// }





module.exports =
{
  add,getData
}