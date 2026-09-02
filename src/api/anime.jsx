const URL_API = 'https://api.jikan.moe/v4';

export async function showAllAnimes() {
    
    //hacemos la peticion http a la api
    const response = await fetch(`${URL_API}/anime`);

    // si la respuesta es negativa, enviamos un mensaje de que no se pudo obtener la lista 
    if(!response.ok){
        throw new Error('No se pudo obtener la lista de animes');
    }

    // si lo es, convertimos el cuerpo de la respuesta a json
    const json = await response.json();

    //retornamos el json data que son los datos de la api
    //ya que solo nos interesa el array no el objeto completo.
   return json.data;
}