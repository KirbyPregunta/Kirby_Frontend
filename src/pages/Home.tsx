import {Footer} from "../components/General/Footer";
import {HeaderLogin} from "../components/General/HeaderLogin";
import {useFetchUser} from "../functions/useFetchUser";
import {CreateGame} from "../components/Home/CreateGame";
import {UserHistory} from "../components/Home/UserHistory";
import {Ranking} from "../components/Home/Ranking";


export const Home = () => {
    const user = useFetchUser();

    return (
        <>
            <HeaderLogin user={user}/>

            <div className="grid grid-cols-2 items-center min-h-[78vh]">
                <div className="flex flex-col gap-y-20">
                    <CreateGame/>
                    <UserHistory/>
                </div>
                <Ranking/>
            </div>

            <Footer/>
        </>

    )
}