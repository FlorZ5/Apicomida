import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  // Obtener el token del encabezado Authorization
  const token = req.headers.authorization.split(" ")[1]; //Separa el Bearer del token y toma la primera posición.

  // Verificar si hay token
  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. No hay token válido.' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, 'secreta'); // Verifica el token con la misma clave secreta usada para firmarlo

    // Agregar el usuario desde el token verificado
    req.user = decoded;
    next(); // Continuar con la ejecución de la ruta protegida
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido.' });
  }
};