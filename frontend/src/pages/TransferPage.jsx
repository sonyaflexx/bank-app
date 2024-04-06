import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

import Alert from '@mui/material/Alert';
import Header from "../components/Header";
import Button from "../components/buttons/Button";
import CardNumberInput from "../components/inputs/CardNumberInput";
import BackButton from "../components/buttons/BackButton";
import MoneyInput from "../components/inputs/MoneyInput"
import { useNavigate } from "react-router-dom";

export default function TransferPage() {
    const navigate = useNavigate();
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [ visibleAlert, setVisibleAlert ] = useState(false);
    const balance = 1000; // TODO GET запрос на кол-во денег
    
    const onSubmit = data => {
        if (balance >= parseInt(data.amountMoney.replace(/\s/g, ""))) {
            data.type = "transfer";
            const dataStr = JSON.stringify(data);
            // TODO POST запрос на перевод
            navigate(`/success/${encodeURIComponent(dataStr)}`)
        } else {
            setVisibleAlert(true);
        }

    }

    return (
        <div className=" relative flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-2xl shadow-xl">
            {visibleAlert && <Alert variant="filled" severity="error" className='fixed top-10'>Недостаточно средств.</Alert> }
            <Header title="Перевод средств" backHref="/" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <p className="font-medium w-full">Введите номер карты, на которую желаете перевести средства</p>
                <CardNumberInput 
                    control={control}
                    error={errors.cardNumber}
                />

                <p className="font-medium w-full">Введите сумму, которую желаете перевести</p>
                <MoneyInput 
                    control={control}
                    error={errors.amountMoney}
                />

                <Button content="Перевести"/>
            </form>
        </div>
    );
}