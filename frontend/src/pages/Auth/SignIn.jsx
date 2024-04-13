import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import CardNumberInput from "../../components/inputs/CardNumberInput";
import AuthInput from "../../components/inputs/AuthInput";
import Button from "../../components/buttons/Button";
import Header from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";
import { Alert } from "@mui/material";

export default function SignIn() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const { login, isLoggedIn } = useContext(AuthContext);
    const [visibleAlert, setVisibleAlert]= useState(false)
    
    const onSubmit = async (data) => {
        let formattedData = {
            ...data,
            card_number: data.card_number.replaceAll(' ', '')
        };
        
        formattedData.card_number = parseInt(formattedData.card_number, 10);
        
            const response = await login(formattedData);
            response.status === 403 && setVisibleAlert(true)
        };

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-3xl shadow-xl">
            <Header title="Авторизация" />
            {visibleAlert && <Alert variant="filled" severity="error" className='fixed top-10'>Неверный номер карты или пароль.</Alert> }
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <CardNumberInput 
                    control={control}
                    error={errors.cardNumber}
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