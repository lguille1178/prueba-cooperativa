import axios from 'axios';

// Función para hacer la llamada a la API con clave de API y token de acceso
export const api = async() =>{
  const peliculas = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=66ef7bde9f5112a8094d311c4ffd28b1')
     return peliculas; 
}

