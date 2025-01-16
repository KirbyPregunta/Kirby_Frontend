import {Header} from "../components/General/Header";
import {Footer} from "../components/General/Footer";
import {Hero} from "../components/Login/Hero";
import {FormLogin} from "../components/Login/FormLogin";

export const Login = ()=>  {

    return (
        <>
            <Header/>
            <div className="flex justify-center items-center gap-9">
                <Hero />
                <FormLogin/>
            </div>
            <Footer/>
        </>
    )
}