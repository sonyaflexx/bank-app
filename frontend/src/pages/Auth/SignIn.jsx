import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import CardNumberInput from "../../components/inputs/CardNumberInput";
import AuthInput from "../../components/inputs/AuthInput";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";

export default function SignIn() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    
    const submit = data => {
        console.log(data);
    }

    return (
        <div className="flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-3xl shadow-xl">
            <Header title="Авторизация" />
            <form 
                onSubmit={handleSubmit(submit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <CardNumberInput 
                    control={control}
                    label="Номер карты"
                />
                <AuthInput 
                    label="Пароль"
                    type="password"
                    name="password"
                    placeholder="Введите пароль..."
                    register={register}
                    required={true}
                    error={errors.password}
                />
                <Button content="Войти"/>
            </form>
            <Link to="/sign-up" className="m-auto">
                Ещё нет карты?
            </Link>
        </div>
    );
}