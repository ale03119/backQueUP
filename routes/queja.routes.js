import fileUpload from "express-fileupload";
import { Router} from "express";
import {autenticacion} from "../middleware/validarToken.js"
import { 
    getQuejas,
    getQueja,
    createQueja,
    updateQueja,
    deleteQueja
 } from "../controllers/queja.controllers.js";

const router = Router();

router.get("/quejas",getQuejas);//funciona 😃

router.get("/queja/:id",getQueja);//funciona 😃

router.post("/queja",fileUpload({useTempFiles : true,tempFileDir : '../imagenes'}),createQueja);//funciona 😃

router.put("/queja",updateQueja);//funciona 😃

router.delete("/queja/:id",deleteQueja);//funciona 😃



export default router;