import { useState } from 'react'
import { AnimeCard } from '../components/AnimeCard'
import { useAnime } from '../hooks/useAnime'
import { SearchBar } from '../components/SearchBar';

export const Explore = () => {

  const [search, setSearch] = useState('');
  // destructuramos el custom hook 
  const { animes, loading, error, retry } = useAnime(search);
  


  

  if(loading){
    return ( <p>Cargando...</p> )
  }

  if (error) {
    return (
      <>
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">{error}</p>
        <button onClick={retry} className="px-4 py-2 rounded-xl bg-primary text-white">
          Reintentar
        </button>
      </div></>
    )
  }

  return (
    <>
      <div className="px-6 mb-6 max-w-7xl mx-auto">
        <SearchBar onSearch={setSearch}/>
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
