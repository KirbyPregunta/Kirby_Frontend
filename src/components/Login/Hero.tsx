import React from "react";

export const Hero = () => {
    return (
        <div className="relative lg:block hidden bg-[#1C1919] bg-opacity-80 w-[753px] h-[491px] rounded-2xl">
            <div className="flex flex-col justify-center items-center h-full pb-32 px-6 max-w-[550px]">
                <h1 className="text-[40px] text-white font-bold tracking-[0.1em] leading-tight uppercase mb-4">¡Bienvenido
                    a <span className="text-[#E169E3]">KIRBY </span><span
                        className="text-[#5990D2]">PREGUNTA</span>!
                </h1>
                <div className="text-[20px] text-white font-semibold tracking-tight">
                    <p>¿Listo para desafiar tu curiosidad?</p>
                    <p>Explora el universo del conocimiento con nuestro adorable Kirby.</p>
                </div>
            </div>
            <img className="absolute -bottom-20 -right-12 w-[350px] h-[350px]" src={"/kirbyInicio.png"}
                 alt={'Kirby inicio'}/>
        </div>
    )
}