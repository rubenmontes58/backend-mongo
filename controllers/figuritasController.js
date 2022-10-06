const Figuritas = require("../models/figuritas");

crearFigurita = async (req, res) => {
    const { pais, numerofigu, cantidad, descripcion, contacto } = req.body;
    const newFigurita = new Figuritas({
        pais,String,
        numerofigu,Number,
        cantidad,Number,
        descripcion,String,
        contacto,Number,

        
    });
    await newFigurita.save();
    res.json({ message: "Figurita creada" });
    };

obtenerFiguritas = async (req, res) => {
    const figuritas = await Figuritas.find();
    res.json(figuritas);
    }

obtenerFigurita = async (req, res) => {
    const figurita = await Figuritas.findById(req.params.id);
    res.json(figurita);
    }

actualizarFigurita = async (req, res) => {
    const { pais, numerofigu, cantidad, descripcion, contacto } = req.body;
    
    await Figuritas.findByIdAndUpdate(req.params.id, {
        pais,String,
        numerofigu,Number,
        cantidad,Number,
        descripcion,String,
        contacto,Number,
    });
    res.json({ message: "Figurita actualizada" });

         
    
    }

eliminarFigurita = async (req, res) => {
    await Figuritas.findByIdAndDelete(req.params.id);
    res.json({ message: "Figurita eliminada" });
    }

module.exports = {
    crearFigurita,
    obtenerFiguritas,
    obtenerFigurita,
    actualizarFigurita,
    eliminarFigurita,
    };
    