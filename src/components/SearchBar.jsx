import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'

export function SearchBar( { onSearch } ) {

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        onSearch(data.query);
    }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page title */}
        <div className="mb-8">
            <h1 className="font-display text-5xl md:text-6xl neon-purple mb-1">EXPLORE</h1>
            <p className="text-muted-foreground text-sm font-mono">Busca, filtra y descubre anime del catalogo completo</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6 max-w-lg">
            <div className="relative">
                <input
                    {...register('query')}
                    type="text"
                    placeholder="Busca por titulo, genero, estudio..."
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 pr-12 text-sm text-foreground 
                    placeholder:text-muted-foreground focus:outline-none focus:border-[#e91e8c66] transition-colors" />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#e91e8c] transition-colors">
                    <Search />
                </button>
            </div>
        </form>

    </div>
  )
}
