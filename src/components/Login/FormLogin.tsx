import React, {useState} from "react";

export const FormLogin = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const validateInputs = () => {
        if (formData.username === '') {
            return "¡Ingrese su username!";
        }
        if (formData.password === '') {
            return "¡Ingrese su contraseña!";
        }
        return null;
    }

    const login = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(validateInputs)

        if (error) return;

        try{
            const loginResponse = await fetch('http://localhost:8080/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(formData)
            })

            const text = await loginResponse.text();

            if (text === "") window.location.href = '/home';
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div
            className="relative bg-[#1C1919] bg-opacity-80 w-[321px] lg:w-[350px] h-[491px] rounded-2xl flex flex-col gap-y-6 items-center justify-center">
            <h1 className="text-white text-[25px] font-semibold tracking-[2px] uppercase">Iniciar sesión</h1>
            <form onSubmit={login}
                  className="flex flex-col gap-y-6">
                <input
                    className="bg-[#252121] rounded-[10px] w-[280px] h-[60px] text-left px-2 outline-0 text-white"
                    placeholder="Usuario" onChange={handleChange} name="username"/>
                <input
                    className="bg-[#252121] rounded-[10px] w-[280px] h-[60px] text-left px-2 outline-0 text-white"
                    type="password" placeholder="Password" onChange={handleChange} name="password"/>
                <button
                    className="bg-[#252121] rounded-[10px] w-[280px] h-[60px] px-2 outline-0 text-white text-center uppercase tracking-[2px]"
                    name='login' value="Login">Ingresar
                </button>
            </form>
            <p className="text-[12px] font-bold text-white">¿No tiene una cuenta? <a className="text-[#92D7F4]"
                                                                                     href="/register">Registrate
                aca</a></p>
            <img
                className="absolute w-[100px] h-[100px]  lg:w-[160px] lg:h-[184px] bottom-0 -right-8 lg:-right-16"
                src={"/pngwingLogin.png"} alt={'Login'}/>
        </div>
    )
}