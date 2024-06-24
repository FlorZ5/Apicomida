import {Router} from "express";
const route = Router();
import comidaCtrl from "../controllers/comida.controller.js";

route.post('/', comidaCtrl.createComida);
route.get('/', comidaCtrl.listAllComida);
route.put('/update/:id', comidaCtrl.updateComida);
route.delete('/delete/:id', comidaCtrl.deleteComida);
route.get('/nombre/:nombre', comidaCtrl.searchComida);
route.get('/filtros', comidaCtrl.comidasWithFilters);


export default route;