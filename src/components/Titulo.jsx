export default function Titulo( { children } ){

    return (
        <h2 className="font-medium text-lg border-l-4 border-amber-500 leading-5 pl-1 m-2">
            { children }
        </h2>
    )
}