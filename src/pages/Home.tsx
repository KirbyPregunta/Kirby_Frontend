import {Footer} from "../components/Footer";
import {HeaderLogin} from "../components/HeaderLogin";
import {useEffect, useState} from "react";
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

export const Home = () => {
    const [user, setUser] = useState<User | null>(null)

    const fetchUser = async () => {
        try {
            const response = await fetch("http://localhost:8080/session", {
                method: "GET",
                credentials: "include",
            });

            return response.json();
        } catch (error) {
            console.error("Fetch user failed:", error);
        }
    };

    useEffect(() => {
        fetchUser().then(r => {
            setUser(r as User);
        } )
    },[])

    return (
        <>
            <HeaderLogin user={user} />
            <div className="h-[80vh] my-8 flex items-center justify-center">
                <div className="flex flex-col items-center justify-around gap-y-6">
                    <div className="flex flex-col lg:flex-row gap-y-2 items-center justify-center">
                        <div className="flex flex-col gap-y-2 lg:gap-y-14 ">
                            <div
                                className="relative bg-[#1C1919] bg-opacity-80 w-[341px] h-[117px] lg:w-[625px] lg:h-[202px] rounded-2xl flex justify-start items-center ">
                                <a href="/partida/comenzandoPartida"
                                   className="text-white text-[10px] lg:text-[15px] lg:tracking-[0.16em] font-semibold">
                                    <div
                                        className="hover:bg-gray-200 hover:text-black flex justify-center items-center bg-[#252121] rounded-2xl w-[125px] h-[24px] lg:w-[305px] lg:h-[41px] ml-4">
                                        CREAR PARTIDA
                                    </div>
                                </a>
                                <img src="/crearPartida.png" alt="crearPartida"
                                     className="absolute lg:-top-28 right-0 max-w-[100%] w-[194px] h-[194px] lg:w-[338px] lg:h-[380px] "/>
                            </div>
                            <div
                                className="relative bg-[#1C1919] bg-opacity-80 w-[341px] h-[117px] lg:w-[625px] lg:h-[202px] rounded-2xl flex">
                                <div className="flex flex-col justify-center gap-y-2 ml-4 ">
                                    <h1 className="font-semibold text-[15px] lg:text-[20px] tracking-[0.12em]  text-white">ULTIMA
                                        PARTIDA</h1>
                                    <div className="flex items-center gap-x-2">
                                        <img className="w-[18px] lg:w-[28px] max-w-[100%]" src="/crown.png"/>
                                        <label className="text-[12px] lg:text-[20px] text-white"></label>
                                    </div>
                                    <div className="flex gap-x-2">

                                        <a href="/partida/jugar"
                                           className="text-white text-[10px] lg:text-[15px] lg:tracking-[0.16em] font-semibold">
                                            <div
                                                className="flex justify-center items-center bg-[#252121] rounded-2xl w-[97px] h-[19px] lg:w-[200px] lg:h-[35px] hover:bg-gray-200 hover:text-black">
                                                CONTINUAR PARTIDA
                                            </div>
                                        </a>

                                        <div className="flex justify-center items-center gap-x-2">
                                            <div>
                                                <button id="foto-perfil" type="button" data-dropdown-toggle="userDrodown"
                                                        data-dropdown-placement="bottom-start"
                                                        className="text-[#9D9D9D] text-[15px] font-semibold tracking-[0.10em]">VER HISTORIAL</button>

                                                <div id="userDrodown"
                                                     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                                        <li>
                                                            <a  href="/historial/partidasJugadas"
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Historial de partidas</a>
                                                        </li>
                                                        <li>
                                                            <a href="/historial/duelosJugados"
                                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Historial de duelos</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="/historialPartidas.png"
                                     className="absolute -top-8 lg:-top-14 -right-4 max-w-[100%] w-[152px] h-[162px] lg:w-[286px] lg:h-[285px]" />
                            </div>
                        </div>
                        <div className="bg-[#1C1919] bg-opacity-80 w-[339px] h-full lg:ml-16 lg:w-[335px] lg:h-[487px] rounded-2xl flex flex-col items-center justify-around ">
                            <div className="lg: h-[40px] flex justify-between  items-center gap-2 my-2 mx-auto rounded-2xl p-4 bg-[#1C1919] bg-opacity-80 lg:w-[300px] text-center text-[15px] lg:text-xl text-white">
                                <img src="/puntos.png" className="w-[15px]" />
                                <p>RANKING</p>
                                <img src="/puntos.png" className="w-[15px]" />
                            </div>

                            <div className=" flex justify-center items-center flex-col gap-x-2 gap-y-2 lg:gap-y-6">
                                <div
                                    className="w-[280px] h-[40px] lg:w-[310px] lg:h-[60px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80 flex items-center">
                                    <p className="text-white ext-[15px] lg:text-xl ml-1 mr-4"></p>
                                    <img src="/"
                                         className="max-w-[100%] w-[30px] lg:w-[45px] h-full rounded-xl"/>
                                    <form action="/user/perfil" method="get">
                                        <input type="submit" className="text-white text-[15px] lg:text-xl m-4"
                                               value=""
                                               name="username"/>
                                    </form>
                                    <p className="text-white ext-[15px] lg:text-xl ml-auto mr-2 "></p>
                                </div>
                            </div>
                            <div className="flex justify-center my-2 text-white">
                                <a className="lg:w-[300px] h-[40px] rounded-xl bg-[#1C1919] bg-opacity-80 flex justify-center items-center p-2 text-[15px] lg:text-2xl"
                                   href="/user/ranking">
                                    Ver ranking completo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}