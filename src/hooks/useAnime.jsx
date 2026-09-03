import { useEffect, useState } from 'react'
import { showAllAnimes, searchAnime } from '../api/anime';

export function useAnime (query) {

    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reintentar, setReintentar] = useState(0);

    useEffect(() => {
        async function loadAnimes() {
            setLoading(true);
            setError(null);
            try {
                const data = query ? await searchAnime(query) : await showAllAnimes();
                setAnimes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadAnimes();
    }, [query, reintentar]);

    function retry(){
        setReintentar(prev => prev + 1);
    }

  return { animes , loading , error, retry }
}
