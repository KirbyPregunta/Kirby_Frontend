
type Gender = {
    id: number;
    description: string;
}

type Country = {
    id: number;
    description: string;
}

type User = {
    id: number;
    score: number;
    name: string;
    username: string;
    birthdate: string;
    email: string;
    profilePhoto: string;
    country: Country;
    gender: Gender;
}


export const HeaderLogin = (props: {user : User | null}) => {

    const { user } = props;

    return (
        <header className='bg-[#1C1919CC] bg-opacity-80 h-[122px] lg:h-[92px] w-full px-6 overflow-hidden'>
            {user &&
                <div className="flex flex-col lg:flex-row justify-between items-center h-full p-4">
                    <div className="lg:flex gap-x-2 hidden">
                        <a href="/user/lobby"><img src="/home.png" alt="home"/></a>
                    </div>
                    <div>
                        <h1 className="font-[primary] not-italic text-[20px] lg:text-[35px] font-extrabold"><span
                            className="text-[#E169E3]">KIRBY </span><span className="text-[#5990D2]">PREGUNTA</span>
                        </h1>
                    </div>

                    <div className="flex justify-center items-center gap-x-2">

                        <div className=" border-2 border-[#252121] rounded-2xl bg-[#252121] bg-opacity-80">
                            <img className="w-[100%] max-w-[50px] h-[50px]  rounded-2xl"
                                 src={user.profilePhoto} alt={user.username}/>
                        </div>
                        <div>
                            <button id="foto-perfil" type="button" data-dropdown-toggle="userDropdown"
                                    data-dropdown-placement="bottom-start"
                                    className="text-[#9D9D9D] text-[15px] font-semibold tracking-[0.10em]">{user.username}</button>

                            <div id="userDropdown"
                                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="avatarButton">
                                    <li>
                                        <a href="/user/perfil"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ver
                                            Perfil</a>
                                    </li>
                                    <li>
                                        <a href="/modificar"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Editar
                                            Perfil</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <p className="text-[12px] text-white font-semibold">{user.score}</p>
                        <form action="/user/logout" method="post">
                            <input
                                className="bg-[#252121] text-[12px] text-white p-2 rounded-3xl cursor-pointer hover:bg-white hover:text-black"
                                type="submit" name="logout" value="Cerrar sesión"/>
                        </form>
                    </div>
                </div>
            }
        </header>
    )
}