import { Key } from "lucide-react";
import { AnimeRanking } from "../components/AnimeRanking";
import { useAnimeRanking } from "../hooks/useAnimeRanking";
import { useMemo, useState } from "react";
import { RankingRowComponet } from "../components/RankingRow";
import { useFavoritos } from "../context/FavoriteContext";

export function TopRated() {
  const { ranking, loading, error } = useAnimeRanking();

  const { favoritos, toggleFavorite, isFavorite } = useFavoritos();
  const [ selected , setSelected ] = useState(null);

  // tomamos solo los primeros 3 animes del ranking
  const rankedThree = useMemo(() => ranking.slice(0, 3), [ranking]);
  const rankedRest = useMemo(() => ranking.slice(3), [ranking]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <p className="font-mono text-xs text-[#00d4ff] neon-cyan uppercase tracking-widest mb-3">
          // Clasificada por puntuación de la comunidad
        </p>
        <h1 className="font-display text-5xl md:text-7xl neon-text mb-2">
          TOP RATED
        </h1>
        <p className="text-muted-foreground text-sm">
          El anime con la puntuación más alta del catálogo, ordenado por puntuación.
        </p>
      </div>

      <h2 className="font-display text-2xl text-[#FFD700] mb-5 tracking-wide">
        ✦ HALL OF FAME
      </h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
          {rankedThree.map((items, index) => (
          <AnimeRanking
            key={items.mal_id}
            anime={items}
            rank={index + 1}
            isFavorite={isFavorite(items.mal_id)}
            onToggleFavorite={toggleFavorite}
            onClick={setSelected}
          />
        ))}
        </div>
        {/* Table header */}
        <h2 className="font-display text-2xl neon-purple mb-4 mt-12">FULL RANKINGS</h2>
        <div className="hidden md:grid grid-cols-[3rem_1fr_5rem_6rem_5rem_7rem] gap-4 px-4 pb-2 border-b border-[#2a1f44] text-xs text-muted-foreground font-mono uppercase tracking-wider">
          <span>Rank</span>
          <span>Title</span>
          <span>Score</span>
          <span>Studio</span>
          <span>Episodes</span>
          <span>Status</span>
        </div>
        {rankedRest.map((anime, index) => (
          <RankingRowComponet 
          key={anime.mal_id}
          anime={anime}
          rank={index + 4}
          isFavorite={isFavorite(anime.mal_id)}
          onToggleFavorite={toggleFavorite}
          onClick={setSelected}/>
        ))}
    </div>
  );
}
