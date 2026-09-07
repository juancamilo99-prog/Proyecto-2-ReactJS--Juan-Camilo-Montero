import { Star } from 'lucide-react';
import { memo } from 'react';

const statusLabels = {
        'Finished Airing': 'Finished',
        'Currently Airing': 'Airing',
        'Not yet aired': 'Upcoming',
    }


export function RankingRowComponet ({ anime, rank, isFavorite, onToggleFavorite, onClick}) {

    const { mal_id, title, title_japanese, images, score, episodes, studios, status, genres} = anime;

  return (
    <div className="space-y-1 mb-10">
        <div className="group flex md:grid md:grid-cols-[3rem_1fr_5rem_6rem_5rem_7rem] gap-4 items-center px-4 py-3 rounded-xl cursor-pointer transition-all hover:bg-card border border-transparent hover:border-[#2a1f44]">
        <span className="font-display text-2xl text-[#2a1f44] group-hover:text-[#7c3aed] transition-colors shrink-0">#{rank}</span>
        <div className="flex items-center gap-3 min-w-0">
            <img src={images?.jpg?.image_url} alt="{title}"
            className="w-10 h-14 rounded-lg object-cover shrink-0"
            loading="lazy" />
            <div className="min-w-0">
            <p className="font-semibold text-sm text-foreground truncate">{title}</p>
            <p className="text-xs text-muted-foreground truncate">{title_japanese}</p>
            <div className="flex gap-1 mt-1 md:hidden">
                {genres?.slice(0, 2).map((genres) => (
                    <span key={genres.mal_id} className="tag px-1.5 py-0.5 rounded text-[#7c3aed] text-[10px]">{genres.name}</span>
                ))}
            </div>
        </div>
        </div>
        {/* Score badge */}
            {score && (
              <span className="score-badge px-3 py-1 rounded-full text-white font-bold text-sm hidden md:inline-flex items-center
              gap-1">
                <Star size={12} fill="currentColor" />
                {score}
              </span>
            )}
          {/* Studio */}
          <span className="text-sm text-muted-foreground font-mono hidden md:block truncate">{studios?.[0]?.name ?? 'Unknown'}</span>
          <span className="text-sm text-muted-foreground font-mono hidden md:block">{episodes ?? '?'} eps</span>
          <span className="hidden md:flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${status === 'Airing' ? "bg-green-400" : "bg-[#8b7aa8]"}`} />
            <span className="text-xs text-muted-foreground font-mono">{statusLabels[status] ?? status}</span>
          </span>
        <button onClick={(e) =>  { e.stopPropagation(); onToggleFavorite(anime) }}
         className={`ml-1 opacity-0 group-hover:opacity-100 shrink-0 transition-all ${isFavorite ? 'text-[#e91e8c]' : 'text-[#8b7aa8] hover:text-[#e91e8c]'}`}>
            <Star size={18}  fill={ isFavorite ? 'currentColor' : 'none' }/>
        </button>
    </div>
    </div>
  )
}

export const RankingRow = memo(RankingRowComponet);

