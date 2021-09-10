const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require('./conexion');
var cors = require('cors')
const PORT = process.env.PORT || 3000;
const Agenda = require('./agenda')
app.use(cors())


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
    const contacto = new Agenda(req.body)
    await contacto.save()
    res.send("ok")
})

app.put('/contacto/edit/:id', async(req, res) => {
    console.log(req.params.id)
    console.log(req.body)

    await Agenda.findByIdAndUpdate(req.params.id, {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        fecha_nacimiento: req.body.fecha_nacimiento,
        fotografia: req.body.fotografia,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    })

    res.send("OK")
})

app.delete('/contacto/delete/:id', async(req, res) => {
    await Agenda.findByIdAndDelete(req.params.id)
    res.send("OK")
})
app.listen(PORT, () => {
    console.log("Escuchando...")
})