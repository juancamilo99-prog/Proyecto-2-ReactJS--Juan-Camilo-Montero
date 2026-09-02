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
      <div>
        <h1>Explore</h1>
        <div>
          {animes.map((items) => (
            <AnimeCard key={items.mal_id} anime={items} isFavorite={false} onToggleFavorite={() => {}}/>
          ))}
        </div>
      </div>
    </>
  )
}
