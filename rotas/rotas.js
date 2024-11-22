const express = require('express');
const MusicasController = require('../controller/controller');

const router = express.Router();

router.get('/', MusicasController.getAll);
router.get('/:id', MusicasController.getById);
router.post('/', MusicasController.create);
router.put('/:id', MusicasController.update);
router.delete('/:id', MusicasController.delete);

module.exports = router;
