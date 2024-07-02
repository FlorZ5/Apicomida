import mongoose from 'mongoose';

const uri = ""; // URI de conexión a MongoDB Atlas

// Creamos la conexión
const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log('Base de datos conectada:', db.connection.name);
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error.message);
    process.exit(1); // Termina la ejecución del proceso en caso de error de conexión
  }
}

export default connectDB;
