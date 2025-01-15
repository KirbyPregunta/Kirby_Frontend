export const Dropdown = () => {
    return (
        <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button"
                 className="flex justify-center items-center bg-[#252121] rounded-2xl hover:bg-gray-200 hover:text-black text-white px-5 py-3">
                <p className={'text-white text-l lg:tracking-[0.16em] font-semibold'}>VER HISTORIAL</p>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-[#252121] rounded-box z-[1] w-52 p-2 shadow">
                <li className={'text-white text-l lg:tracking-[0.16em] font-semibold'}><a href={'/userHistory'}>Partidas</a></li>
                <li className={'text-white text-l lg:tracking-[0.16em] font-semibold'}><a>Duelos</a></li>
            </ul>
        </div>
    )
}