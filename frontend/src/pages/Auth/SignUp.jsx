import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import AuthInput from "../../components/inputs/AuthInput";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import userStore from "../../store/UserStore";

export default function SignUp() {
    const { registration } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, control, formState: { errors }, watch } = useForm();
    const password = watch("password", "");

    const onSubmit = async (data) => {
        // TODO POST запрос с data на передчу на создание user и ниже его ответ засунуть туда
        try {
            const response = await registration(data)
            navigate(`/sign-up/success/${encodeURIComponent(JSON.stringify(response))}`)
        } catch (e) {
            alert(e)
        }
    }

    if (userStore.isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-3xl shadow-xl">
            <Header title="Регистрация" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <AuthInput 
                    label="Имя"
                    type="text"
                    name="firstname"
                    placeholder="Введите ваше имя..."
                    register={register}
                    required={true}
                    error={errors.firstname}
                />
                <AuthInput 
                    label="Фамилия"
                    type="text"
                    name="lastname"
                    placeholder="Введите вашу фамилию..."
                    register={register}
                    required={true}
                    error={errors.lastname}
                />
                <AuthInput 
                    label="Пароль"
                    type="password"
                    name="password"
                    placeholder="Придумайте пароль..."
                    register={register}
                    required={true}
                    error={errors.password}
                />
                <AuthInput 
                    label="Подтвердите пароль"
                    type="password"
                    name="confirmPassword"
                    placeholder="Повторите ваш пароль..."
                    register={register}
                    required={true}
                    error={errors.confirmPassword}
                    validate={{
                        sameAsPassword: value => value === password || "Пароли не совпадают"
                    }}
                />
                <Button content="Создать карту"/>
            </form>
            <Link to="/sign-in" className="m-auto">
                Уже есть карта?
            </Link>
        </div>
    );
}