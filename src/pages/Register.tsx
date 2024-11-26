import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {useEffect, useState} from "react";

type Gender = {
    id: number;
    description: string;
}

type User = {
    id: number;
    name: string;
    username: string;
    password: string;
    repeatPassword: string;
    birthday: string;
    email: string;
    profilePhoto: string;
    country: number;
    city: number;
    gender: number;
}

export const Register = ()=> {
    const [formData, setFormData] = useState<User | null>(null);
    const [genders, setGenders] = useState<Gender[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const fetchGenders = async () => {
        try {
            const gendersResponse = await fetch("http://localhost:8080/genders",{
                method: "GET",
            });
            return await gendersResponse.json();
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGenders().then(r =>
            setGenders(r as Gender[])
        );
    }, [formData]);

    return (
        <>
            <Header/>
            <div className="container mx-auto my-4 flex justify-center">
                <div
                    className="relative rounded-2xl p-6 bg-[#1C1919] bg-opacity-80  lg:w-[1137px] h-auto flex justify-center items-center flex-col">
                    <img
                        className="absolute -top-8 -right-8 md:-right-20 lg:top-0 lg:-right-16 w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
                        src="/public/kirbyRegistro.png" alt={'Registro'}/>
                    <h2 className="mb-2 lg:mb-6 tracking-[0.12em] text-white font-semibold text-[15px] md:text-[20px] uppercase">Crear
                        cuenta</h2>
                    <form className="text-white font-light h-full tracking-[0.06em] text-[15px] "
                          action="/register" method="POST" encType="multipart/form-data">
                        <div className="flex flex-col md:flex-row gap-x-6 justify-center">
                            <div className="flex flex-col gap-y-6">
                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="text" name="nombre" id="nombre"
                                    placeholder="Nombre" required/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="date" name="fecha_nacimiento"
                                    id="fecha_nacimiento" placeholder="Fecha de nacimiento" required/>


                                <select
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80 bg-"
                                    onChange={handleChange} name={'gender'}>
                                    {genders.map((gender, index) => (
                                        <option key={index} value={gender.id}>
                                            {gender.description}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    placeholder="Pais" type="text" name="pais" id="pais" required/>

                                <div className="flex flex-col gap-y-2">
                                    <input
                                        className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                        placeholder="Ciudad" type="text" name="ciudad" id="ciudad" required readOnly/>
                                    <div className="w-[280px] h-[150px] md:h-[200px] md:w-[430px]" id="map"></div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-6">
                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="text" name="register_username" id="username"
                                    placeholder="Nombre de usuario" required/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="password" name="register_password" id="password"
                                    placeholder="Password" required/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="password" name="repetir_password"
                                    id="repetir_password" placeholder="Repetir Password" required/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="email" name="email" id="email"
                                    placeholder="Email" required/>

                                <input
                                    className="w-[280px] h-[45px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="file" name="img_profile"
                                    id="img_profile"/>
                            </div>

                        </div>
                        <div className="my-2 lg:my-6 flex justify-center items-center">
                            <button
                                className=" w-[159px] h-[40px] rounded-2xl bg-[#252121] bg-opacity-80 font-normal text-[12px] lg:text-[16px] uppercase"
                                type="submit" name="registrarme">Registrarse
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <Footer/>
        </>
    )
}