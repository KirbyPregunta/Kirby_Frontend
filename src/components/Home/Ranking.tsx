import {useEffect, useState} from "react";
import {User} from "../../types/types";

export const Ranking = () => {
    const [users, setUsers] = useState<User[]>([]);

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

    useEffect(() => {
        fetchUsers().then(r => {
            setUsers(r as User[]);
        })
    },[])


    return (
        <div className="bg-[#1C1919] bg-opacity-80 rounded-2xl flex flex-col items-center w-[66%] mx-auto gap-y-16 p-12">

            <div className="flex justify-between items-center rounded-2xl p-4 bg-[#1C1919] bg-opacity-80 gap-x-4 w-[80%]">
                <img src="/puntos.png" className="w-[15px]" alt={'Score'}/>
                <p className={'text-center text-2xl text-white tracking-[0.12em]'}>RANKING</p>
                <img src="/puntos.png" className="w-[15px]" alt={'Score'}/>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-6 w-[100%]">
                {users.length > 0 ?
                    users.map((user, index) => (
                        <div key={index}
                             className="rounded-xl outline-0 bg-[#252121] bg-opacity-80 flex items-center justify-between min-w-[100%] p-4">
                            <div className="flex items-center gap-4">
                                <img src={user.profilePhoto}
                                     className="w-[30px] lg:max-w-[45px] h-full rounded-xl"
                                     alt={'Profile photo'}/>
                                <p className="text-white text-xl">{user.username}</p>
                            </div>
                            <p className="text-white text-[15px] lg:text-xl">{user.score}</p>
                        </div>
                    )) :
                    <>
                    </>
                }
            </div>

            <div className="w-[80%]">
                <a className="rounded-xl bg-[#1C1919] bg-opacity-80 flex justify-center items-center p-2 text-xl text-white"
                   href="/user/ranking">
                    Ver ranking completo
                </a>
            </div>
        </div>
    )
}