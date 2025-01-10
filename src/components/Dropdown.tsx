export const Dropdown = () => {
    return (
        <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn bg-[#252121] hover:bg-gray-200 m-1">Ver historiales</div>
            <ul tabIndex={0} className="dropdown-content menu bg-[#252121] rounded-box z-[1] w-52 p-2 shadow">
                <li><a href={'/userHistory'}>Partidas</a></li>
                <li><a>Duelos</a></li>
            </ul>
        </div>
    )
}