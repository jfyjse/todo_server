const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/todo_list", { useNewUrlParser:
 true,useUnifiedTopology: true })

 const Todo = mongoose.model('Todo', {
     idd:Number,
     data: String,
     order :Number,
     doneStatus : Boolean
})

module.exports={
    Todo
}