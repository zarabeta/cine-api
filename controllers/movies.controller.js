const Movie = require('../models/movie.model');

// Consultar todos los peliculas
exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(
            {
                message: 'Peliculas obtenidos con éxito',
                data: movies
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
exports.getMovieById = async (req, res) => {
    const movieId = req.params.movieId;
    console.log("res",res.params)
    try {
        const movie = await Movie.findById(movieId);
        return res.status(200).json(
            {
                message: 'Pelicula obtenido con éxito',
                data: movie
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

// Crear pelicula
/*
{
    "id" : Number
    "nombre" : String,
    "director": String,
    "año" : Number,
    "duracion" : Number,
        "genero" : String
}
*/
exports.newMovie = async (req, res) => {
    try {
        const { nombre, director, año, duracion, genero } = req.body;
        const newMovie = new Movie({ nombre, director, año, duracion, genero });
        await newMovie.save();

        return res.status(200).json(
            {
                message: 'Pelicula creado con éxito',
                data: newMovie
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
exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, newData, { new: true });
        return res.status(201).json(
            {
                message: 'Actualizar pelicula por ID',
                data: updatedMovie
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
exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        await Movie.findByIdAndDelete(movieId);
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
