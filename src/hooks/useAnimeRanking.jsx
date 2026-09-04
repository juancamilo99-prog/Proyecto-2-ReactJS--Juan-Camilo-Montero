import { useEffect, useState } from 'react'
import { topRanking } from '../api/anime';

export function useAnimeRanking() {
  

    const [ranking, setRanking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadRankingAnimes() {
            setLoading(true);
            setError(null);
            try {

                const data = await topRanking();
                setRanking(data);
                console.log(data);
                
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        loadRankingAnimes();
    }, [])

    return { ranking, loading, error }
}
