import {useEffect, useState} from "react";
import {Game, User} from "../types/types";

export const UserHistory = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [user, setUser] = useState<User>();
    
    const fetchGames = async () => {
        try {
            const response = await fetch("http://localhost:8080/userHistory", {
                method: "GET",
                credentials: "include",
            })
            
            return await response.json();
        }catch (error) {
            console.error("Fetch user failed:", error);
        }
    }

    useEffect(() => {
        fetchGames().then(r => {
            const games = r as Game[];
            setGames(games);
            setUser(games[0].user)
        })
    },[])
    
    return (
        <>
            <div
                className="relative bg-[#1C1919] bg-opacity-80 mx-auto rounded-2xl md:w-[682px] h-full  w-[333px] flex flex-col ">
                <div className="flex justify-center items-start">
                    <p className="mt-9 text-white text-[15px] lg:text-[20px] tracking-[0.12em] text-bold uppercase">{user && user.username},
                        jugaste {games.length} partidas</p>
                </div>
                    <div className="overflow-y-scroll scrollbar">
                        <table
                            className=" bg-[#252121] bg-opacity-80 rounded-l-2xl w-[80%] mx-auto text-center  rounded-3xl border-collapse mt-12 p-5 mb-6 ">
                            <tbody>
                            <tr className="">
                                <th className="text-white text-[12px] font-semibold md:text-[15px] p-2">#</th>
                                <th className="text-white text-[12px] font-semibold md:text-[15px] p-2">Puntaje</th>
                            </tr>
                            </tbody>
                            {games.map((game, index) => (
                                <tr className="" key={index}>
                                    <td className="text-white text-[12px] md:text-[15px] p-2" >{game.id}</td>
                                    <td className="text-white text-[12px] md:text-[15px] p-2">{game.score}</td>
                                </tr>
                            ))

                            }
                        </table>
                    </div>
                <img src="/historial.png" alt="historial"
                     className="absolute w-[70px] h-[66px] lg:w-[90px] lg:h-[80px] bottom-0 -right-4"/>
            </div>
        </>
    )
}