'use client';
import { useState } from "react";

//components
import Input from "@/components/Input";

export default function Registrar(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    function handleSenha(e){
        const senha = e.target.value;
        setSenha(senha)
        setError(senha.length < 8 ? 'senha muito curta' : '')
    }


    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Criar Conta</h1>
            <form className="flex flex-col w-1/3 ">
                
                <Input 
                    label="E-mail" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <Input 
                    label="Senha" 
                    type="password"
                    value={senha} 
                    onChange={handleSenha} 
                />

                <span className="text-red-500 mb-4">{error}</span>

                
                <button
                    title={error}
                    disabled={error} 
                    className="rounded bg-amber-500 text-black px-5 py-2 hover:bg-amber-300 disabled:opacity-50"
                >criar conta</button>
            </form>
        </div>
    )
}

// falsy = null - 0 - -2 - undefined - NaN - false - ''