import { useEffect, useState } from 'react'
import { showAllAnimes, searchAnime } from '../api/anime';

export function useAnime (query) {

    //empieza [] para que un .map en el render inicial no rompa la app
    const [animes, setAnimes] = useState([]);
    //empieza true al montar, todavia no sabemos si hay datos o no
    const [loading, setLoading] = useState(true);
    //lo usamos para forzar incremenetacion y volver a disparar el useEffect
    const [error, setError] = useState(null);

    const [reintentar, setReintentar] = useState(0);

    useEffect(() => {
        async function loadAnimes() {
            setLoading(true);
            setError(null);
            try {
                //guardamos en data la query que seria la consulta para buscar, 
                //si existe query buscamos anime y si no, mostramos todos
                const data = query ? await searchAnime(query) : await showAllAnimes();
                setAnimes(data);
                console.log('se ejecuta una vez')
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadAnimes();
    }, [query, reintentar]);

    //lo usamos para que el array de dependencias del useEffect detecte un cambio
    function retry(){
        setReintentar(prev => prev + 1);
    }

  return { animes , loading , error, retry }
}
