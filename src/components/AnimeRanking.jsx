import { memo, useState } from "react";
import { Star } from "lucide-react";
import { AnimeCard } from "../components/AnimeCard";

const RANKING_COLOR = ["#FFD700", "#C0C0C0", "#CD7F32"];

function RankinCard({ anime, rank, isFavorite, onToggleFavorite }) {
  
  const gold = RANKING_COLOR[rank - 1] ?? "#8b7aa8";
  const { mal_id, title, images, score, year, studios } = anime;

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group border"
      style={{ borderColor: gold + "44", boxShadow: `0 0 30px ${gold}` }}
      onClick={() => onClick(anime)}
    >
      <div className="aspect-4/5 relative overflow-hidden bg-[#1e1a2e]">
        <img
          src={images?.jpg?.large_image_url}
          alt="title"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
          {/* Rank Badge */}
          <div
            className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center font-display text-xl"
            style={{
              background: gold,
              color: "#000",
              boxShadow: `0 0 20px ${gold}88`,
            }}
          >
            #{rank}
          </div>
          {/* Score */}
          <div className="absolute top-3 right-3 score-badge px-2.5 py-1 rounded-full text-white font-bold text-sm">
            {score && (
              <span className="flex gap-2">
                <Star size={12} fill="currentColor" />
                {score}
              </span>
            )}
          </div>
          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display text-xl text-white leading-tight mb-1"
            style={{ textShadow: "0 0 20px rgba(0,0,0,0.8)"}}>
              {title}
            </h3>
            <p>{studios?.[0]?.name ?? 'Unknown'} · {year ?? '-'}</p>
          </div>
          {/* Favorite button */}
          <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1.5 rounded-full bg-black/50 transition-all"
          style={{ color: isFavorite ? gold : "#8b7aa8", top: "48px"}} onClick={(e) => { e.stopPropagation(); onToggleFavorite(mal_id)}}>
            <Star size={14}
              className={isFavorite ? 'text-primary' : 'text-muted-foreground'}
              fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    </div>
  );
}

export const AnimeRanking = memo(RankinCard);
