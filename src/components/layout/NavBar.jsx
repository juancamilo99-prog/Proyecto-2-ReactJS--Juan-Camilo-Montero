import { Home, Compass, Star, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Home', icon: <Home /> },
    { to: '/explore', label: 'Explore', icon: <Compass /> },
    { to: '/top-rated', label: 'Top Rated', icon: <Star /> },
    { to: '/favorites', label: 'Favorites', icon: <Heart /> },
]

export function NavBar (){
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background grid-bg flex flex-col" >
        <header className="sticky top-0 z-40 border-b border-[#2a1f44] bg-background/90 backdrop-blur-md">
            {/* Top Nav */}
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-6">
                {/* Logo */}
                <button onClick={() => navigate('/')} className="flex items-baseline gap-0.5 shrink-0">
                    <span className="font-display text-3xl leading-none neon-text">ANIME</span>
                    <span className="font-display text-3xl leading-none neon-purple">UNIVERSE</span>
                </button>

                {/* nav Links */}
                <nav className="hidden md:flex items-center gap-1 flex-1">
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

                {/* boton hamburguesa, visible solo en mobile */}
                <button onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden ml-auto text-foreground">
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>
            {/* Panel desplegable solo en mobile, cuando is open es true */}
                {isOpen && (
                    <nav className="md:hidden flex flex-col border-t border-border px-4 py-3 gap-1">
                        {navItems.map((items) => (
                            <NavLink
                            key={items.to}
                            to={items.to}
                            end={items.to === '/'}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => 
                                `flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold
                            ${isActive ? 'text-foreground bg-card/60' : 'text-muted-foreground'}`}>
                                <span className="text-base leading-none">{items.icon}</span>
                                {items.label}
                            </NavLink>
                        ))}
                    </nav>
                )}
        </header>
    </div>
  )
}
