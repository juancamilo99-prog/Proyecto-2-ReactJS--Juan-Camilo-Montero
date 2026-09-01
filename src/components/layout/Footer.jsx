{/* -- Footer -- */}
import React from 'react'

export function Footer(){
  return (
    <footer className="border-t border-border py-6 px-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
            <span className="font-display text-xl neon-text">ANIME</span>
            <span className="font-display text-xl neon-purple">VERSE</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
            Juan Camilo Montero · Favorites saved locally in your browser
        </p>
    </footer>
  )
}

