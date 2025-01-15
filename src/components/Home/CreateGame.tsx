export const CreateGame = () =>{
    return (
        <div className="relative bg-[#1C1919] bg-opacity-80 rounded-2xl flex justify-start items-center p-12 w-[80%] mx-auto">
            <a href="/partida/comenzandoPartida" className="text-white text-[10px] lg:text-[15px] lg:tracking-[0.16em] font-semibold">
                <div className="hover:bg-gray-200 hover:text-black flex justify-center items-center bg-[#252121] rounded-2xl px-10 py-6">
                    CREAR PARTIDA
                </div>
            </a>
            <img src="/crearPartida.png" alt="crearPartida" className="absolute lg:-top-28 right-0 max-w-[100%] w-[194px] h-[194px] lg:w-[338px] lg:h-[380px] "/>
        </div>
    )
}