import { Key } from "lucide-react";
import { AnimeRanking } from "../components/AnimeRanking";
import { useAnimeRanking } from "../hooks/useAnimeRanking";
import { useMemo } from "react";

export function TopRated() {
  const { ranking, loading, error } = useAnimeRanking();

  // tomamos solo los primeros 3 animes del ranking
  const rankedThree = useMemo(() => ranking.slice(0, 3), [ranking]);

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
          // ranked by community score
        </p>
        <h1 className="font-display text-5xl md:text-7xl neon-text mb-2">
          TOP RATED
        </h1>
        <p className="text-muted-foreground text-sm">
          The highest-score anime in the catalog, ranked by score.
        </p>
      </div>

      <h2 className="font-display text-2xl text-[#FFD700] mb-5 tracking-wide">
        ✦ HALL OF FAME
      </h2>
        <div className="grid grid-cols-3 gap-5">
          {rankedThree.map((items, index) => (
          <AnimeRanking
            key={items.mal_id}
            anime={items}
            rank={index + 1}
            isFavorite={false}
            onToggleFavorite={() => {}}
          />
        ))}
        </div>
    </div>
  );
}
