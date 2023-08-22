const mongoose = require('mongoose')

let notaSchema = new mongoose.Schema({
name:{
    type:  String
},
surname:{
    type:  String
},
email:{
    type:  String
},
mobile:{
    type:  String
},
address:{
    type:  String
},
text:{
    type:  String
},
age:{
    type:  Number
}
})

mongoose.model('notaModel', notaSchema)