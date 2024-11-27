import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import React, {useEffect, useState} from "react";
import Select from 'react-select';

type Gender = {
    id: number;
    description: string;
}

type Country = {
    id: number;
    description: string;
}

type User = {
    name: string;
    username: string;
    password: string;
    repeatPassword: string;
    birthdate: string;
    email: string;
    country: number | null;
    gender: number | null;
    emailCode: string;
}

export const Register = ()=> {
    const [formData, setFormData] = useState<User | null>({
        name: '',
        username: '',
        password: '',
        repeatPassword: '',
        birthdate: '',
        email: '',
        country: null,
        gender: null,
        emailCode: ''
    });
    const [genders, setGenders] = useState<Gender[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);
    const [flagFetches, setFlagFetches] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [validatedFormData, setValidatedFormData] = useState<boolean>(false);

    const countryOptions = countries.map((country: Country) => ({
        label: country.description,
        value: country.id,
    }))
    const genderOptions = genders.map((gender: Gender) => ({
        label: gender.description,
        value: gender.id,
    }))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSelectChange = (selectedOption, fieldName) => {
        setFormData({ ...formData, [fieldName]: selectedOption.value });
    };

    const validateInputs = () => {
        if (formData.name === '') {
            return '¡Debe ingresar su nombre!';
        }

        if (formData.username === '') {
            return '¡Debe ingresar su username!';
        }

        if (formData.birthdate === '') {
            return '¡Debe ingresar su fecha de nacimiento!';
        }

        if (formData.email === '') {
            return '¡Debe ingresar su email!';
        }

        if (formData.password === '') {
            return '¡Debe ingresar una contraseña!';
        }

        if (formData.repeatPassword === '') {
            return '¡Debe repetir su contraseña!';
        }

        if (formData.repeatPassword !== formData.password) {
            return '¡Las contraseñas deben ser iguales!';
        }

        if (formData.gender === null) {
            return '¡Debe ingresar su género!';
        }

        if (formData.country === null) {
            return '¡Debe ingresar su país!';
        }

        return null;
    };

    const params = new URLSearchParams({
        email: formData.email,
    });

    const sendMail =  async (e : React.FormEvent)=>{
        e.preventDefault();
        setError(validateInputs);

        if(error) return;

        try{
            const sendMailResponse = await fetch(`http://localhost:8080/sendMail?${params}`, {
                method: 'POST',
                credentials: "include",
            })

            setError(await sendMailResponse.text())

            if(error === '' || error === null) setValidatedFormData(true)

        }catch(e){
            console.log(e);
        }
    }

    const createUser =  async (e : React.FormEvent)=>{
        e.preventDefault();
        setError(validateInputs);

        if(error) return;

        console.log(formData);
        try{
            const createUserResponse = await fetch('http://localhost:8080/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(formData)
            })

            if(createUserResponse.ok) window.location.href = '/login';

            setError(await createUserResponse.json())
        }catch(e){
            console.log(e);
        }
    }

    const fetchGenders = async () => {
        try {
            const gendersResponse = await fetch("http://localhost:8080/genders", {
                method: "GET",
            });
            return await gendersResponse.json();
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCountries = async () => {
        try {
            const countriesResponse = await fetch("http://localhost:8080/countries", {
                method: "GET",
            });
            return await countriesResponse.json();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGenders().then(r =>
            setGenders(r as Gender[])
        );

        fetchCountries().then(r =>
            setCountries(r as Country[])
        )
        setFlagFetches(true)

    }, [flagFetches]);

    return (
        <>
            <Header/>
            {!validatedFormData ? (
                <div className="container mx-auto my-4 flex justify-center">
                    <div
                        className="relative rounded-2xl p-6 bg-[#1C1919] bg-opacity-80  lg:w-[1137px] h-auto flex justify-center items-center flex-col">
                        <img
                            className="absolute -top-8 -right-8 md:-right-20 lg:top-0 lg:-right-16 w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
                            src="/public/kirbyRegistro.png" alt={'Registro'}/>
                        <h2 className="mb-2 lg:mb-6 tracking-[0.12em] text-white font-semibold text-[15px] md:text-[20px] uppercase">Crear
                            cuenta</h2>
                        <form onSubmit={sendMail}
                              className="text-white font-light h-full tracking-[0.06em] text-[15px] flex flex-col gap-y-10">
                            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="text" name="name" onChange={handleChange}
                                    placeholder="Nombre"/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="text" name="username" onChange={handleChange}
                                    placeholder="Nombre de usuario"/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="date" name="birthdate" onChange={handleChange}
                                    placeholder="Fecha de nacimiento"/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="email" name="email" onChange={handleChange}
                                    placeholder="Email"/>


                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="password" name="password" onChange={handleChange}
                                    placeholder="Password"/>

                                <input
                                    className="w-[280px] h-[32.88px] lg:w-[430px] lg:h-[47px] rounded-xl p-2 outline-0 bg-[#252121] bg-opacity-80"
                                    type="password" name="repeatPassword" onChange={handleChange}
                                    placeholder="Repetir Password"/>

                                <Select
                                    options={genderOptions}
                                    placeholder={'Seleccionar género'}
                                    onChange={(selectedOption) => handleSelectChange(selectedOption, 'gender')}
                                    name="gender"
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            backgroundColor: 'rgba(37, 33, 33, 0.8)',
                                            borderColor: '#4B5563',
                                            borderRadius: '8px',
                                            color: 'white',
                                            padding: '5px',
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            color: 'white',
                                            backgroundColor: 'rgba(37, 33, 33, 0.9)',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            backgroundColor: state.isSelected
                                                ? 'rgba(37, 33, 33, 1)'
                                                : 'rgba(37, 33, 33, 0.8)',
                                            color: 'white',
                                            padding: '10px',
                                            cursor: 'pointer',
                                        }),
                                    }}
                                />

                                <Select
                                    options={countryOptions}
                                    placeholder="Seleccionar país"
                                    onChange={(selectedOption) => handleSelectChange(selectedOption, 'country')}
                                    name="country"
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            backgroundColor: 'rgba(37, 33, 33, 0.8)',
                                            borderColor: '#4B5563',
                                            borderRadius: '8px',
                                            padding: '5px',
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            color: 'white',
                                            backgroundColor: 'rgba(37, 33, 33, 0.9)',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                            maxHeight: '200px',
                                            overflow: 'hidden',
                                            scrollbarWidth: 'none',
                                        }),
                                        menuList: (provided) => ({
                                            ...provided,
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none',
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            backgroundColor: state.isSelected
                                                ? 'rgba(37, 33, 33, 1)'
                                                : 'rgba(37, 33, 33, 0.8)',
                                            color: 'white',
                                            padding: '10px',
                                            cursor: 'pointer',
                                        }),
                                    }}
                                />


                            </div>
                            <div className="my-2 lg:my-6 flex flex-col items-center">
                                <button
                                    className=" w-[159px] h-[40px] rounded-2xl bg-[#252121] bg-opacity-80 font-normal text-[12px] lg:text-[16px] uppercase"
                                    type="submit" name="registrarme">Registrarse
                                </button>
                                {error && (
                                    <p className={'text-xl text-white'}>{error}</p>
                                )}
                            </div>

                        </form>
                    </div>
                </div>
            ): (
                <div className="h-[70vh] flex items-center justify-center">

                    <form className="w-full h-full flex flex-col justify-center items-center" onSubmit={createUser}>
                        <h1 className="text-black font-bold text-[13px] lg:text-[18px] mb-6 lg:mb-2">Te enviamos un
                            mail,
                            ingresá el código para validar.</h1>
                        <div className="w-full flex justify-center items-center">
                            <input
                                className="w-auto lg:w-[30%] rounded-l-2xl p-5 outline-0 bg-[#1C1919] bg-opacity-80 text-white"
                                placeholder="Ingrese el codigo" type="text" name="emailCode" onChange={handleChange}/>
                            <input
                                className="w-auto lg:w-[10%] bg-[#1C1919] bg-opacity-80 border-l-[1px] border-white text-white font-normal rounded-r-2xl cursor-pointer p-5"
                                type="submit" value="Enviar" name="enviarCodigo"/>
                        </div>
                    </form>

                </div>
            )}

            <Footer/>
        </>
    )
}