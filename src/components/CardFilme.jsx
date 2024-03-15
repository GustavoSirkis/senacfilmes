"use client"
import { useState } from 'react';

import { StarIcon} from '@heroicons/react/20/solid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function CardFilme( { filme } ){
    
    const [favorito, setFavorito] = useState(false);

    function favoritar(){
        setFavorito(true);
        const favoritos= JSON.parse(localStorage.getItem("favoritos")) || [];
        favoritos.push(filme);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    function desfavoritar(){
        setFavorito(false);
        const favoritos= JSON.parse(localStorage.getItem("favoritos")) || [];
        const favoritosAtualizados = favoritos.filter((f)=> f.titulo != filme.titulo);
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizados));
    }

    return (
        <div className="flex flex-col w-40 items-center relative">
            {
                favorito ? 
                    <FavoriteIcon className='absolute right-2 top-2 text-red-600 cursor-pointer' onClick={desfavoritar} /> : 
                    <FavoriteBorderIcon className='absolute right-2 top-2 text-amber-500 cursor-pointer' onClick={favoritar} />
            }

            <img className="rounded" src={filme.poster} alt="poster" />
            <span className="text-zinc-400 font-medium text-center line-clamp-1">{filme.titulo}</span>
            
            <div className="flex">
                <span >
                    <StarIcon className="h-6 w-6 text-amber-500" />
                </span>
                <span className="text-zinc-400">{filme.nota}</span>
            </div>
            <a href="#" className="bg-cyan-600 w-full text-center rounded m-1 py-1">Detalhes</a>
        </div>
    );
}