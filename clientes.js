const express=require('express');
const router=express.Router();

const clientesController=require('../controllers/clientesController');

router.get('/',clientesController.list);
router.post('/add',clientesController.save);
router.get('/delete/:telefono',clientesController.delete);
router.get('/update/:telefono',clientesController.edit);
router.post('/update/:telefono',clientesController.update);

module.exports = router;
