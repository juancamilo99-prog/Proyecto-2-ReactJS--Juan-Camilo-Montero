import { memo } from "react";
import { AnimeCard } from "../components/AnimeCard";

const RANKING_COLOR = ["#FFD700", "#C0C0C0", "#CD7F32"];

function RankinCard({ ranking, rank, isFavorite, onToggleFavorite }) {
  const gold = RANKING_COLOR[rank - 1] ?? "#8b7aa8";

  return (
      <AnimeCard
        anime={ranking}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
  );
}

export const AnimeRanking = memo(RankinCard);
