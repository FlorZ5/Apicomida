import { comidaModel } from "../models/comida.model.js";
import message from '../utils/messages.js';

const {messageGeneral} = message;

const comidaCtrl = {};

comidaCtrl.createComida = async(req, res) => {
    try {
        const data = req.body;
        const resp = await comidaModel.create(data);
        messageGeneral(res,201,true,resp,"¡Platillo creado!");
      } catch (error) {
        messageGeneral(res,500,false,"",error.message);
      }
}

comidaCtrl.listAllComida=async(req,res)=>{
  try {
    //hace el inner join con el usuario y que no muestre el password.
    const resp= await comidaModel.find();
    messageGeneral(res,200,true,resp,"Lista de platillos");
  } catch (error) {
    messageGeneral(res,500,false,"",error.message);
  }
};

comidaCtrl.updateComida = async(req,res) =>{
  try {
    const { id } = req.params;
    const resp = await comidaModel.findById(id);
    if(!resp){
      return messageGeneral(res,404,false,"","Platillo no encontrado");
    }
    await resp.updateOne(req.body);
    messageGeneral(res,200,true,"","Platillo actualizado!!!");
  } catch (error) {
    messageGeneral(res,500,false,"",error.message);
  }
};

comidaCtrl.deleteComida = async(req,res) =>{
  try {
    const { id } = req.params;
    const resp = await comidaModel.findById(id);
    if(!resp){
      return messageGeneral(res,404,false,"","Platillo no encontrado");
    }
    await resp.deleteOne();
    messageGeneral(res,200,true,"","Platillo eliminado!!!");
  } catch (error) {
    messageGeneral(res,500,false,"",error.message);
  }
};

comidaCtrl.searchComida = async(req,res) =>{
  try {
    //buscar por nombres
    const { nombre } = req.params;
    //busca los platillos con la expresión que indica que busca la constante
    //que inicien o contengan la cadena de la expresión.
    const resp = await comidaModel.find({
      nombre:nombre
    });
    messageGeneral(res,200,true,resp,"");
  } catch (error) {
    messageGeneral(res,500,false,"",error.message);
  }
};

comidaCtrl.comidasWithFilters = async (req, res) => {
  const { nombre, categoria } = req.params;
  let filter = {};
  
  if (nombre) {
    filter.nombre = nombre;
  }
  
  if (categoria) {
    filter.categoria = categoria;
  }

  try {
    const resp = await comidaModel.find(filter);
    res.json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default comidaCtrl;