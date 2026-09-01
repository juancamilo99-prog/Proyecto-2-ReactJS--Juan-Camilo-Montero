import { useNavigate } from 'react-router-dom';

const stats = [
    {value: '20', label: 'Total Series', color: 'text-primary'},
    {value: '8.1', label: 'Total Score', color: 'text-secondary'},
    {value: '5', label: 'Currently Watching', color: 'text-accent'},
    {value: '15+', label: 'Genres', color: 'text-primary'}
];

export function Hero() {

    const navigate = useNavigate();

  return (
    <section className="hero-gradient text-center py-16 px-4">
        <p className="font-mono text-xs text-gray-500 neon-cyan uppercase tracking-widest mb-3">
            // discover · explore · favorite · enjoy
        </p>
        <h1 className="font-display text-6xl md:text-8xl text-foreground leading-none mb-4">
            <span className="neon-text">ANIME </span>
            <span className="neon-purple">UNIVERSE</span>
        </h1>
        <p className="text-muted-foreground text-base max-w-md mx-auto mb-6">
            20 hand-picked series and films. Discover your next obsession.</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
            <button onClick={() => navigate('/explore')} 
            className="box-hero px-6 py-2.5 rounded-xl text-sm font-bold text-white">Explore All Anime</button>
            <button onClick={() => navigate('/favorites')}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold border border-border text-muted-foreground
                hover:border-border hover:text-foreground transition-all">My Favorites (0)</button>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <div key={stat.label} className="border border-border rounded-xl bg-card/40 py-6">
                    <p className={`font-display text-3xl ${stat.color}`}>{stat.value}</p>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
