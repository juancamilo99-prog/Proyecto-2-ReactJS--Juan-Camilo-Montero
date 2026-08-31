import React from 'react'
import { Home, Compass, Star, Heart } from 'lucide-react';

const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/explore', label: 'Explore', icon: Compass },
    { to: '/top-rated', label: 'Top Rated', icon: Star },
    { to: '/favorites', label: 'Favorites', icon: Heart },
]

export function NavBar (){
  return (
    <div className="min-h-screen bg-background grid-bg flex flex-col" >
        <header className="sticky top-0 z-40 border-b border-[#2a1f44] bg-background/90 backdrop-blur-md">
            {/* Top Nav */}
            <div className="max-w-xl mx-auto px-4 py-3 flex items-center gap-6">
                {/* Logo */}
                <button onClick={() => navigate('/')} className="flex items-baseline gap-0.5 shrink-0">
                    <span className="font-display text-3xl leading-none neon-text">ANIME</span>
                    <span className="font-display text-3xl leading-none neon-purple">VERSE</span>
                </button>

                {/* nav Links */}
                <nav className="flex items-center gap-1 flex-1">
                    {}
                </nav>
            </div>
        </header>
    </div>
  )
}
