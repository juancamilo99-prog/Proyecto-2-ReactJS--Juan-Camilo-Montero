import { useState } from 'react'
import { AnimeCard } from '../components/AnimeCard'
import { useAnime } from '../hooks/useAnime'
import { SearchBar } from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

export const Explore = () => {

  const [search, setSearch] = useState('');
  // destructuramos el custom hook 
  const { animes, loading, error, retry } = useAnime(search);

  const navigate = useNavigate();


  if(loading){
    return ( <p>Cargando...</p> )
  }

  return (
    <>
      <div className="px-6 mb-6 max-w-7xl mx-auto">
        <SearchBar onSearch={setSearch}/>
        {error && (
          <div className="flex items-center gap-3 mt-3 mb-2">
            <p className="text-sm text-red-400">{error}</p>
            <button onClick={retry} className="text-sm underline text-primary">Reintentar</button>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {animes.map((items) => (
            /* renderizamos AnimeCard por cada anime, pasandole los props que necesita */
            <AnimeCard key={items.mal_id} anime={items} isFavorite={false} onToggleFavorite={() => {}}/>
          ))}
        </div>
      </div>
    </>
  )
}
