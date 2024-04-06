import { useState } from "react";

import Alert from '@mui/material/Alert';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Button from "./buttons/Button";
import MoneyInput from "./inputs/MoneyInput";
import TelInput from "./inputs/TelInput";

export default function PaymentMobileForm(props) {
    const navigate = useNavigate();
    const [ visibleAlert, setVisibleAlert ] = useState(false);
    const { control, register, handleSubmit, formState: { errors } } = useForm();

    const balance = 1000; // TODO GET запрос на кол-во денег
    
    const onSubmit = data => {
        if (balance >= parseInt(data.amountMoney.replace(/\s/g, ""))) {
            data.type = "mobile"
            data.tel = '+7 ' + data.tel
            data.operator = props.operator
            const dataStr = JSON.stringify(data);
            navigate(`/success/${encodeURIComponent(dataStr)}`)
            // TODO POST запрос на снятие 
        } else {
            setVisibleAlert(true);
        }
    }
    
    return (
        <div className="relative flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-2xl shadow-xl">
            {visibleAlert && <Alert variant="filled" severity="error" className='fixed top-10'>Недостаточно средств.</Alert> }
            <Header title={"Пополнение счёта " + props.operator} backHref="/payments" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <label className="flex flex-col items-center gap-2">
                    <p className="font-medium ">Введите номер телефона, который желаете пополнить</p>
                    <TelInput control={control} />
                </label>
                <div className="flex flex-col items-center gap-2">
                    <p className="font-medium">Введите сумму, которую желаете потратить на услугу</p>
                    <MoneyInput control={control} error={errors.amountMoney} />
                </div>
                <Button content="Пополнить"/>
            </form>
        </div>
    );
}