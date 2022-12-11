const express=require('express');
const router=express.Router();

const medicamentosController=require('../controllers/medicamentosController.js');

router.get('/',medicamentosController.list);
router.post('/add',medicamentosController.save);
router.get('/delete/:codigo',medicamentosController.delete);
router.get('/update/:codigo',medicamentosController.edit);
router.post('/update/:codigo',medicamentosController.update);

module.exports = router;