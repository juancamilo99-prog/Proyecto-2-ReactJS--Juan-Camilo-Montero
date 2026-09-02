import React, { useState } from 'react'
import { AnimeCard } from '../components/AnimeCard'
import { useAnime } from '../hooks/useAnime'

export const Explore = () => {

  const { animes, loading, error } = useAnime();

  if(loading){
    return ( <p>Cargando...</p> )
  }

  if (error) {
    return (<p>{error}</p>)
  }

  return (
    <>
      <div className="px-6 mb-6 max-w-7xl mx-auto">
        <h1>Explore</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {animes.map((items) => (
            <AnimeCard key={items.mal_id} anime={items} isFavorite={false} onToggleFavorite={() => {}}/>
          ))}
        </div>
      </div>
    </>
  )
}
