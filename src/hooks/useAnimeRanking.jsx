import { useEffect, useState } from 'react'
import { topRanking } from '../api/anime';

export function useAnimeRanking() {
  

    //empieza [] para que un .map en el render inicial no rompa la app
    const [ranking, setRanking] = useState([]);
    //empieza true al montar, todavia no sabemos si hay datos o no
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadRankingAnimes() {
            //reseteamos loading/error en cada ejecucion del efecto,
            // por si esto se llega a disparar mas de una vez
            setLoading(true);
            setError(null);
            try {
                //guardamos la promesa que trae los datos
                const data = await topRanking();
                //se los pasamos a setRankins
                setRanking(data);
                console.log(data);
                
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        loadRankingAnimes();
    }, []) // se ejecuta una sola vez al montar , el ranking no depende de ningun filtro

    return { ranking, loading, error }
}
