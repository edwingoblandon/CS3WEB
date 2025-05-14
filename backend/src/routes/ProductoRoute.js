import { getAllP, createP, deleteP} from "../controller/ProductoController.js";
import express from 'express';

const router = express.Router()

router.get('/listar', getAllP)
router.post('/crear', createP)
router.delete('/:Id', deleteP)
export default router;