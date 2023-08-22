const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Nota = mongoose.model('notaModel')

router.get('/', (req, res)=>{
    res.render('addupdate',{
        viewTitle: 'Inserisci una nota'
    })   
})

router.post('/', (req, res)=>{
if(req.body._id == ''){
    insertRecord(req, res)
}else{
    updateRecord(req, res)
}

})

//funzione per creare una nuova nota
function insertRecord(req, res){
let nota = new Nota()
nota.name = req.body.name
console.log(req.body.name)
nota.surname = req.body.surname
nota.email = req.body.email
nota.mobile = req.body.mobile
nota.address = req.body.address
nota.text = req.body.text
nota.age = req.body.age

nota.save().then((doc) =>{
    if(doc){
        res.redirect('list')
    }else{
        console.log('errore nell\'inserimento')
    }
})
}

function updateRecord(req, res){
Nota.updateOne({_id: req.body._id}, req.body, {new:true}).then((doc)=>{
    if(doc){
        res.redirect('/list')
    }
})
}

//Leggere tutti i dati
router.get('/list', (req, res) =>{
    Nota.find().then((docs) =>{
        res. render('list', {
            notalist: docs
        })
    })
})

router.get('/:id', (req, res) =>{
    Nota.findById(req.params.id).then((doc) =>{
        res.render('addupdate', {
            viewTitle: 'Aggiornamento',
            nota: doc
        })
    })
})

//cancellare un dato
router.get('/delete/:id', (req, res) =>{
    Nota.findByIdAndRemove(req.params.id).then((doc) =>{
        if(doc){
            res.redirect('/list')
        }
    })
})

module.exports = router