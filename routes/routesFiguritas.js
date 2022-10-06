// Rutas para producto
const express = require('express');
const router = express.Router();
const figuritasController = require('../controllers/figuritasController');

// 
router.post('/', figuritasController.crearFigurita);
router.get('/', figuritasController.obtenerFiguritas);
router.put('/:id', figuritasController.actualizarFigurita);
router.get('/:id', figuritasController.obtenerFigurita);
router.delete('/:id', figuritasController.eliminarFigurita);

module.exports = router;

