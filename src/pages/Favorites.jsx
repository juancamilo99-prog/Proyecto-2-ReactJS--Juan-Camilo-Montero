import { StarIcon } from "lucide-react";
import { useFavoritos } from "../context/FavoriteContext";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { AnimeCard } from "../components/AnimeCard";

export function Favorites() {
  const { favoritos, toggleFavorite } = useFavoritos();

  //promedio score favorites animes
  const promedio = useMemo(() => {
    if (favoritos.length === 0) return 0; // evitamos dividir entre 0

    const suma = favoritos.reduce((acumulador, anime) => {
      return acumulador + anime.score;
    }, 0);

    return (suma / favoritos.length).toFixed(2);
  }, [favoritos]);

  const acumuladorEpisodios = useMemo(() => {
    const acumulador = favoritos.reduce((acumulador, anime) => {
      return acumulador + anime.episodes;
    }, 0);

    return acumulador;
  }, [favoritos]);

  const finished = favoritos.filter(
    (element) => element.status === "Finished Airing",
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-display text-5xl md:text-6xl neon-text mb-1">
              MY FAVORITES
            </h1>
            <p className="text-muted-foreground text-sm font-mono">
              {favoritos.length === 0
                ? "Your personal watchlis is empty"
                : `${favoritos.length} series in your watchlist`}
            </p>
          </div>
        </div>
        {favoritos.length === 0 ? (
          <div className="text-center py-24 border border-[#2a1f44] rounded-2xl bg-card/50">
            <div className="text-[#2a1f44] mb-4">
              <StarIcon size={64} />
            </div>
            <p className="font-display text-5xl text-[#2a1f44]">
              NOTHING SAVED
            </p>
            <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
              Browse anime and click the ★ icon on any card to save it to your
              favorites.
            </p>
            <Link
              to="/explore"
              className="link-browse inline-block px-8 py-3 rounded-xl text-sm font-bold text-white"
            >
              Browse Anime
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-2xl px-5 py-4">
                <p className="font-display text-3xl mb-0.5 neon-text">
                  {favoritos.length}
                </p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  Series Saved
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl px-5 py-4">
                <p className="font-display text-3xl mb-0.5 neon-purple">
                  {promedio}
                </p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  Promedio Score
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl px-5 py-4">
                <p className="font-display text-3xl mb-0.5 neon-cyan">
                  {finished.length}
                </p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  Finished Anime
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl px-5 py-4">
                <p className="font-display text-3xl mb-0.5 neon-text">
                  {acumuladorEpisodios}
                </p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  Total Episodios
                </p>
              </div>
            </div>
          </>
        )}
        {/* GRID FAVORITOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {favoritos.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </>
  );
}
