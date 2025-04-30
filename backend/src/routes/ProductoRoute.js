import { getAllP, createP} from "../controller/ProductoController.js";
import express from 'express';

const router = express.Router()

router.get('/listar', getAllP)
router.post('/crear', createP)

export default router;