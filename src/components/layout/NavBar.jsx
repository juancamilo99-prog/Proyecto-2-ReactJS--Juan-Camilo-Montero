import { Home, Compass, Star, Heart } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Home', icon: <Home /> },
    { to: '/explore', label: 'Explore', icon: <Compass /> },
    { to: '/top-rated', label: 'Top Rated', icon: <Star /> },
    { to: '/favorites', label: 'Favorites', icon: <Heart /> },
]

export function NavBar (){
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background grid-bg flex flex-col" >
        <header className="sticky top-0 z-40 border-b border-[#2a1f44] bg-background/90 backdrop-blur-md">
            {/* Top Nav */}
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center gap-6">
                {/* Logo */}
                <button onClick={() => navigate('/')} className="flex items-baseline gap-0.5 shrink-0">
                    <span className="font-display text-3xl leading-none neon-text">ANIME</span>
                    <span className="font-display text-3xl leading-none neon-purple">VERSE</span>
                </button>

                {/* nav Links */}
                <nav className="flex items-center gap-1 flex-1">
                    {navItems.map((items) => (
                        <NavLink
                            key={items.to}
                            to={items.to}
                            end={items.to === '/'}
                            className={({ isActive }) => (
                                `relative flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold transition-all
                                ${isActive ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                }`
                            )}>
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <span className="box-gradient absolute inset-0 rounded-xl opacity-100"></span>
                                        )}
                                        <span className="relative hidden sm:inline text-base leading-none">{items.icon}</span>
                                        <span className="relative">{items.label}</span>
                                    </>
                                )}

                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    </div>
  )
}
