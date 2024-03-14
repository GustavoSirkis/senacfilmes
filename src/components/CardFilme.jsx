export default function CardFilme( { filme } ){

    return (
        <div className="flex flex-col w-40 items-center">
            <img className="rounded" src={filme.poster} alt="poster" />
            <span className="text-zinc-400 font-medium text-center line-clamp-1">{filme.titulo}</span>
            
            <div className="flex">
                <span className="text-amber-500 text-4xl">*</span>
                <span className="text-zinc-400">{filme.nota}</span>
            </div>
            <a href="#" className="bg-cyan-600 w-full text-center rounded m-1 py-1">Detalhes</a>
        </div>
    );
}