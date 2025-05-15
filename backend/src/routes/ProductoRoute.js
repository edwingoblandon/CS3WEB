import { getAllP, createP, deleteP, editP} from "../controller/ProductoController.js";
import express from 'express';

const router = express.Router()

router.get('/listar', getAllP)
router.post('/crear', createP)
router.delete('/:Id', deleteP)
router.put('/:Id', editP)

export default router;