const Funcion = require('../models/funcion.model');

// Consultar todos los peliculas
exports.getFunciones = async (req, res) => {
    try {
        const funciones = await Funcion.find();
        return res.status(200).json(
            {
                message: 'Peliculas obtenidos con éxito',
                data: funciones
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar peliculas',
                data: error
            }
        );
    }
};

// Consultar pelicula por id
exports.getFuncionById = async (req, res) => {
    const funcionId = req.params.funcionId;
    try {
        const funcion = await Funcion.findById(funcionId);
        return res.status(200).json(
            {
                message: 'Pelicula obtenido con éxito',
                data: funcion
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar pelicula',
                data: error
            }
        );
    }
};

// Crear funciones

/*
{
      "nombre": "Wonka",
    "fecha" : "30 de diciembre 2023",
    "hora": "12:00",
    "duracion" : "120 minutos"
}
*/
exports.newFuncion = async (req, res) => {
    try {
        const {nombre, fecha, hora, duracion} = req.body;
        const newFuncion = new Funcion({nombre, fecha, hora, duracion });
        await newFuncion.save();

        return res.status(200).json(
            {
                message: 'Pelicula creado con éxito',
                data: newFuncion
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al crear pelicula',
                data: error
            }
        );
    }
};

// Actualizar pelicula
exports.updateFuncion = async (req, res) => {
    const funcionId = req.params.funcionId;
    const newData = req.body;
    try {
        const updatedFuncion = await Funcion.findByIdAndUpdate(funcionId, newData, { new: true });
        return res.status(201).json(
            {
                message: 'Actualizar pelicula por ID',
                data: updatedFuncion
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al actualizar pelicula',
                data: error
            }
        );
    }
};

// Eliminar pelicula
exports.deleteFuncion = async (req, res) => {
    const funcionId = req.params.funcionId;
    try {
        await Funcion.findByIdAndDelete(funcionId);
        return res.status(201).json(
            {
                message: 'Pelicula eliminado con éxito'
            }
        );
    } catch (error) {
        console.log((error));
        return res.status(500).json(
            {
                message: 'Error al eliminar pelicula',
                data: error
            }
        );
    }
};
