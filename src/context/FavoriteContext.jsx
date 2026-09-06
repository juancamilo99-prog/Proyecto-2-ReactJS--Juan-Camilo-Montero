import { createContext, useContext, useEffect, useState } from 'react'

const FavoriteProviderContext = createContext();

export function FavoriteContext({ children }) {

    const [favoritos, setFavoritos] = useState(() => {
        const saveFavorite = localStorage.getItem('favoritos');
        let saveConvertString = [];
        if(saveFavorite){
            saveConvertString = JSON.parse(saveFavorite);
        }
        return saveConvertString;
    });

    useEffect(() => {
        // 1: guardamos "favoritos" en localStorage bajo la clave 'favoritos', 
    //    usando JSON.stringify para convertirlo a texto
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);


    function toggleFavorite(anime){
        setFavoritos((prev) => {
            const existeAnime = prev.some((fav) => anime.mal_id === fav.mal_id);

            if(existeAnime){
                const nuevaLista = prev.filter(element => element.mal_id !== anime.mal_id)
                return nuevaLista;
            }else{
                return [...prev, anime];
            }
        })
    }

    function isFavorite(mal_id){
        const existeFavorito = favoritos.some((fav) => fav.mal_id === mal_id);
        return existeFavorito;
    }


  return (
    <FavoriteProviderContext.Provider value={{ favoritos, toggleFavorite, isFavorite }}>
        {children}
    </FavoriteProviderContext.Provider>
  )
}

export function useFavoritos(){
    return useContext(FavoriteProviderContext);
}
