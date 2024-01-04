const express = require('express');
const router = express.Router();
const funcionesController = require('../controllers/funciones.controller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', funcionesController.getFunciones);

router.get('/:funcionId', funcionesController.getFuncionById);

router.post('/',authMiddleware.authenticateToken, funcionesController.newFuncion);

router.put('/:funcionId',authMiddleware.authenticateToken, funcionesController.updateFuncion);

router.delete('/:funcionId',authMiddleware.authenticateToken, funcionesController.deleteFuncion);

module.exports = router;