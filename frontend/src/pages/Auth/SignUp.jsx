import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthInput from "../../components/inputs/AuthInput";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";

export default function SignIn() {
    const { register, handleSubmit, control } = useForm();
    
    const submit = data => {
        console.log(data);
    }

    return (
        <div className="flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-3xl shadow-xl">
            <Header title="Регистрация" />
            <form 
                onSubmit={handleSubmit(submit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <AuthInput 
                    label="Имя"
                    type="text"
                    name="firstname"
                    placeholder="Введите ваше имя..."
                    register={register}
                />
                <AuthInput 
                    label="Фамилия"
                    type="text"
                    name="lastname"
                    placeholder="Введите вашу фамилию..."
                    register={register}
                />
                <AuthInput 
                    label="Пароль"
                    type="password"
                    name="password"
                    placeholder="Придумайте пароль..."
                    register={register}
                />
                <AuthInput 
                    label="Подтвердите пароль"
                    type="password"
                    name="password_repeat"
                    placeholder="Введите пароль еще раз..."
                    register={register}
                />
                <Button content="Создать карту"/>
            </form>
            <Link to="/sign-in" className="m-auto">
                Уже есть карта?
            </Link>
        </div>
    );
}