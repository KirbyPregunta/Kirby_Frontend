import {Dropdown} from "../Utilities/Dropdown";
import {Game} from "../../types/types";
import {useEffect, useState} from "react";

export const UserHistory = () =>{
    const [game, setGame] = useState<Game | null>(null);

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
        fetchTheLastUserGame().then(r => {
            setGame(r as Game);
        })
    },[])

    return (
        <div
            className="relative bg-[#1C1919] bg-opacity-80 rounded-2xl flex w-[80%] mx-auto p-12">
            <div className="flex flex-col justify-center gap-y-4">
                <h1 className="font-semibold text-2xl tracking-[0.12em] text-white">ULTIMA PARTIDA</h1>
                <div className="flex items-center gap-4">
                    <img className="" src="/crown.png" alt={'Score'}/>
                    <label className="text-[12px] lg:text-[20px] text-white">{game ? game.score : "-"}</label>
                </div>
                <div className="flex items-center gap-x-10">
                    {game &&
                        <a href="/partida/jugar"
                           className="text-white text-l lg:tracking-[0.16em] font-semibold">
                            <div className="flex justify-center items-center bg-[#252121] rounded-2xl hover:bg-gray-200 hover:text-black px-5 py-3">
                                CONTINUAR PARTIDA
                            </div>
                        </a>
                    }
                    <Dropdown/>
                </div>
            </div>
            <img src="/historialPartidas.png"
                 className="absolute -top-8 lg:-top-14 -right-4 max-w-[100%] w-[152px] h-[162px] lg:w-[286px] lg:h-[285px]"
                 alt={'Historial'}/>
        </div>
    )
}