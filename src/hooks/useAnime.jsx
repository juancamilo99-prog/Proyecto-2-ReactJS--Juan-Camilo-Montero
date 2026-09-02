import { useEffect, useState } from 'react'
import { showAllAnimes } from '../api/anime';

export function useAnime () {

    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadAnimes() {
            try {
                const data = await showAllAnimes();
                setAnimes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadAnimes();
    }, [])

  return { animes , loading , error }
}
