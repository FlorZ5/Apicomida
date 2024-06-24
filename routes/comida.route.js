import {Router} from "express";
const route = Router();
import comidaCtrl from "../controllers/comida.controller.js";

route.post('/comida', comidaCtrl.createComida);
route.get('/comida', comidaCtrl.listAllComida);
route.put('/comida/update/:id', comidaCtrl.updateComida);
route.delete('/comida/delete/:id', comidaCtrl.deleteComida);
route.get('/comida/nombre/:nombre', comidaCtrl.searchComida);
route.get('/comida/filtros', comidaCtrl.comidasWithFilters);


export default route;