const express=require('express');
const router=express.Router();

const medicosController=require('../controllers/medicosController');

router.get('/',medicosController.list);
router.post('/add',medicosController.save);
router.get('/delete/:rfc',medicosController.delete);
router.get('/update/:rfc',medicosController.edit);
router.post('/update/:rfc',medicosController.update);

module.exports = router;