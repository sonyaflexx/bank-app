import { Link } from "react-router-dom";

import CardNumberInput from "../components/inputs/CardNumberInput";
import AuthInput from "../components/inputs/AuthInput";
import Button from "../components/buttons/Button";
import Header from "../components/Header";

export default function SignIn() {
    return (
        <div className="flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-3xl shadow-xl">
            <Header title="Авторизация" />
            <form 
                // onSubmit={handleSubmit}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <CardNumberInput />
                <AuthInput 
                    label="Пароль"
                    type="password"
                    placeholder="Введите пароль..."
                />
                <Button content="Войти"/>
            </form>
            <Link to="/sign-up" className="m-auto">
                Ещё нет карты?
            </Link>
        </div>
    );
}