import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

// creamos el contexto
const FavoriteProviderContext = createContext();

export function FavoriteContext({ children }) {

    //inicializacion para leer localStorage solo la primera vez que se monta
    //si no hay nada en la primera vista, arranca vacio []
    const [favoritos, setFavoritos] = useState(() => {
        const saveFavorite = localStorage.getItem('favoritos');
        let saveConvertString = [];
        if(saveFavorite){
            saveConvertString = JSON.parse(saveFavorite);
        }
        return saveConvertString;
    });

    //cada vez que favoritos cambia, sincronizamos ese cambio con localStorage
    //localStorage solo guarda strings, por eso usamos JSON.stringify
    useEffect(() => {
        // 1: guardamos "favoritos" en localStorage bajo la clave 'favoritos', 
    //    usando JSON.stringify para convertirlo a texto
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);


    //agrega o quita un anime de favoritos, segun si ya estaba o no
    //usamos useCallback porque usa la forma funcional (prev)
    //nunca lee favoritos, asi que no necesita recrearse nunca
    const toggleFavorite = useCallback((anime) => {
        setFavoritos((prev) => {
            const existeAnime = prev.some((fav) => anime.mal_id === fav.mal_id);

            if(existeAnime){
                //si ya existe el anime, lo quitamos con filter
                const nuevaLista = prev.filter(element => element.mal_id !== anime.mal_id)
                return nuevaLista;
            }else{
                //si no existe, lo agregamos con spreads
                return [...prev, anime];
            }
        })
    }, [])


    //consulta si un anime especifico ya esta en favoritos, por su id
    const isFavorite = useCallback((mal_id) =>{
        const existeFavorito = favoritos.some((fav) => fav.mal_id === mal_id);
        return existeFavorito;
    }, [favoritos])

    const value = useMemo(() => ({
        favoritos, toggleFavorite, isFavorite
    }), [favoritos, toggleFavorite, isFavorite]);


    //expone favoritos, las dos funciones a cualquier componenete descendiente
  return (
    <FavoriteProviderContext.Provider value={value}>
        {children}
    </FavoriteProviderContext.Provider>
  )
}

//con useFavoritos evitamos que cada componente tenga que importar useContext y favoriteProvider por separado
export function useFavoritos(){
    return useContext(FavoriteProviderContext);
}
