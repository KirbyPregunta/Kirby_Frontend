import {Footer} from "../components/Footer";
import {HeaderLogin} from "../components/HeaderLogin";
import {useFetchUser} from "../functions/useFetchUser";
import {useEffect, useState} from "react";
import {Game, User} from "../types/types";
import {Dropdown} from "../components/Dropdown";


export const Home = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [game, setGame] = useState<Game | null>(null);

    const user = useFetchUser();

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:8080/findTopThreeUsersWithTheHighestScore", {
                method: "GET",
                credentials: "include",
            });

            return await response.json();
        } catch (error) {
            console.error("Fetch user failed:", error);
        }
    };

    const fetchTheLastUserGame = async () => {
        try {
            const response = await fetch("http://localhost:8080/findTheLastUserGame", {
                method: "GET",
                credentials: "include",
            });

            return await response.json();
        } catch (error) {
            console.error("Fetch user failed:", error);
        }
    };

    useEffect(() => {
        fetchUsers().then(r => {
            setUsers(r as User[]);
        })
        fetchTheLastUserGame().then(r => {
            setGame(r as Game);
        })
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
                                        <img className="w-[18px] lg:w-[28px] max-w-[100%]" src="/crown.png" alt={'Score'}/>
                                        <label className="text-[12px] lg:text-[20px] text-white">{game ? game.score : "-"}</label>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        {game &&
                                            <a href="/partida/jugar"
                                               className="text-white text-[10px] lg:text-[15px] lg:tracking-[0.16em] font-semibold">
                                                <div
                                                    className="flex justify-center items-center bg-[#252121] rounded-2xl w-[97px] h-[19px] lg:w-[200px] lg:h-[35px] hover:bg-gray-200 hover:text-black">
                                                    CONTINUAR PARTIDA
                                                </div>
                                            </a>
                                        }

                                        <div className="flex justify-center items-center gap-x-2">
                                            <div>
                                                <Dropdown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="/historialPartidas.png"
                                     className="absolute -top-8 lg:-top-14 -right-4 max-w-[100%] w-[152px] h-[162px] lg:w-[286px] lg:h-[285px]"  alt={'Historial'}/>
                            </div>
                        </div>
                        <div className="bg-[#1C1919] bg-opacity-80 w-[339px] h-full lg:ml-16 lg:w-[335px] lg:h-[487px] rounded-2xl flex flex-col items-center justify-around ">
                            <div className="lg: h-[40px] flex justify-between  items-center gap-2 my-2 mx-auto rounded-2xl p-4 bg-[#1C1919] bg-opacity-80 lg:w-[300px] text-center text-[15px] lg:text-xl text-white">
                                <img src="/puntos.png" className="w-[15px]"  alt={'Score'}/>
                                <p>RANKING</p>
                                <img src="/puntos.png" className="w-[15px]"  alt={'Score'}/>
                            </div>

                            <div className=" flex justify-center items-center flex-col gap-x-2 gap-y-2 lg:gap-y-6">
                                {users.length > 0 ?
                                    users.map((user, index) => (
                                        <div key={index}
                                            className="w-[280px] h-[40px] lg:w-[310px] lg:h-[60px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80 flex items-center">
                                            <img src={user.profilePhoto}
                                                 className="max-w-[100%] w-[30px] lg:w-[45px] h-full rounded-xl" alt={'Profile photo'}/>
                                            <p className="text-white ext-[15px] lg:text-xl ml-1 mr-4">{user.username}</p>
                                            <form action="/user/perfil" method="get">
                                                <input type="submit" className="text-white text-[15px] lg:text-xl m-4"
                                                       value=""
                                                       name="username"/>
                                            </form>
                                            <p className="text-white ext-[15px] lg:text-xl ml-auto mr-2 ">{user.score}</p>
                                        </div>
                                    )) :
                                    <>
                                    </>
                                }
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

            <Footer/>
        </>

    )
}