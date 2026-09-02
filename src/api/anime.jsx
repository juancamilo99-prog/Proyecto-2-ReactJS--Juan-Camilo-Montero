const URL_API = 'https://api.jikan.moe/v4';

export async function showAllAnimes() {
    
    const response = await fetch(`${URL_API}/anime`);

    if(!response.ok){
        throw new Error('No se pudo obtener la lista de animes');
    }

    const json = await response.json();

   console.log(json.data)

   return json.data;
}