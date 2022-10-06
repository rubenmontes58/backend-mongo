const mongoose = require('mongoose');

const FiguritasSchema = mongoose.Schema({


    

    pais: {
        type: String,
        required: true,

    },

    numerofigu: {
        type: Number,
        required: true,

    },

    cantidad: {
        type: Number,
        required: true,

    },

    descripcion: {
        type: String,
        required: true,

    },

    contacto: {
        type: Number,
        required: true,

    },



});

module.exports = mongoose.model('Figuritas', FiguritasSchema);

