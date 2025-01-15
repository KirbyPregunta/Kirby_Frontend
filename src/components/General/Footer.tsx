export const Footer = () => {
    return (
        <footer
            className=' bg-[#1C1919CC] bg-opacity-80 h-[68px] lg:h-[86px] w-full flex justify-between px-4 gap-x-2 items-center fixed bottom-0'>
            <h1 className=" font-[primary] not-italic text-[20px] lg:text-[35px] font-extrabold"><span
                className="text-[#E169E3]">KIRBY </span><span className="text-[#5990D2]">PREGUNTA</span></h1>
            <a className="text-[10px] md:text-[12px] text-white tracking-[0.15em]" href="/pregunta/sugerir">¿Querés
                aportar creando una pregunta? <span className="text-[#5990D2]">Creá tu pregunta acá</span></a>
            <div className="flex items-center justify-center">
                <a href="#"><img className="max-w-[100%] w-[35px] md:w-[38px] h-[30px] md:h-[38px] "
                                 src={"/instagram2.png"} alt="ig"/></a>
            </div>
        </footer>
    )
}