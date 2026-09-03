import { memo, useState } from 'react'
import { Star } from 'lucide-react';

const statusLabels = {
    'Finished Airing' : 'Finished',
    'Currently Airing' : 'Airing',
    'Not yet aired' : 'Upcoming',
};

function AnimeCardComponent ({ anime, isFavorite, onToggleFavorite }) {


    const [imgLoaded, setImgLoaded] = useState(false);
    const { mal_id, title, images, score, type, episodes, year, studios, genres, status } = anime;

  return (
    <div className="card-glow rounded-xl overflow-hidden bg-card cursor-pointer group relative" onClick={() => onClick(anime)}>
      <div className="relative aspect-3/4 overflow-hidden bg-[#1e1a2e]">
      {!imgLoaded && <div className="absolute inset-0 skeleton" />}
        <img
          src={images?.jpg?.large_image_url}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />

        {/* SCORE */}
        {score && (
          <span className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary">
            <Star size={12} fill="currentColor" />
            {score}
          </span>
        )}

        {/* TYPE */}
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-background/80 text-foreground">
            {type}
          </span>
          <button
            onClick={() => onToggleFavorite(mal_id)}
            className="p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
          >
            <Star
              size={14}
              className={isFavorite ? 'text-primary' : 'text-muted-foreground'}
              fill={isFavorite ? 'currentColor' : 'none'}
            />
          </button>
        </div>

        <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-xs text-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {statusLabels[status] ?? status}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground mb-2">
          {year ?? '—'} · {episodes ?? '?'} eps · {studios?.[0]?.name ?? 'Unknown'}
        </p>
        <div className="flex flex-wrap gap-1">
          {genres?.slice(0, 2).map((genre) => (
            <span
              key={genre.mal_id}
              className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-[#7c3aed]"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const AnimeCard = memo(AnimeCardComponent);


