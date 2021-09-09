const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require('./conexion');
var cors = require('cors')
const PORT = process.env.PORT || 3000;
const Agenda = require('./agenda')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/agenda', async(req, res) => {
    const agenda = await Agenda.find()

    res.send(agenda)
})

app.get('/contacto/:id', async(req, res) => {
    const contacto = await Agenda.findById(req.params.id).lean()
    res.send(contacto)
})

app.post('/contacto/new', async(req, res) => {
    const { contact } = req.body
    console.log(req.body)
    const contacto = new Agenda(req.body)
    await contacto.save()
})

app.put('/contacto/edit/:id', async(req, res) => {
    const { contacto } = req.body
    await Todo.findByIdAndUpdate(req.params.id, { contacto })
})

app.delete('/contacto/delete/:id', async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
})
app.listen(PORT, () => {
    console.log("Escuchando...")
})