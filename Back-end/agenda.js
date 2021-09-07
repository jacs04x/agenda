const mongoosee = require('mongoose')
const { Schema } = mongoosee

const AgendaSchema = new Schema({


    nombre: { type: String, require },
    apellidos: { type: String, require },
    fecha_nacimiento: { type: Date, require },
    foto: {
        data: Buffer,
        contentType: String
    },
    telefono: [{
        alias: { type: String },
        tipo: { type: String },
        numero: { type: String }
    }],

    direccion: {
        calle: { type: String },
        numero_exterior: { type: String },
        numero_interior: { type: String },
        colonia: { type: String },
        municipio: { type: String },
        estado: { type: String },
        referencias: { type: String }
    }


})

module.exports = mongoosee.model('Agenda', AgendaSchema)