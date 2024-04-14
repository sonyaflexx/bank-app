import { useState } from "react";

import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import Header from "./Header";
import Button from "./buttons/Button";
import MoneyInput from "./inputs/MoneyInput";

import api from "../api";
import userStore from "../store/UserStore";

export default function PaymentInternetForm(props) {
    const navigate = useNavigate();
    const [ visibleAlert, setVisibleAlert ] = useState(false);
    const { control, register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = async (data) => {
        try {
            data.type = "internet";
            data.operator = props.operator
            data.sender_id = userStore.user.card_number;
            let formattedData = {
                ...data,
                amount: parseFloat(data.amount.replaceAll(' ', ''))
            };
            
            const response = await api.post('api/transaction/payments/internet', formattedData);

            if (response.data.success) {
                navigate(`/success/${encodeURIComponent(JSON.stringify(formattedData))}`);
            } 
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setVisibleAlert(true);
            }
        }
    };
    
    return (
        <div className="relative flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-2xl shadow-xl">
            {visibleAlert && <Alert variant="filled" severity="error" className='fixed top-10'>Недостаточно средств.</Alert> }
            <Header title={"Пополнение счёта " + props.operator} backHref="/payments" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <label className="flex flex-col items-center gap-2 w-full">
                    <p className="font-medium ">Введите номер лицевого счёта</p>
                    <input type="number" name="account"  placeholder="Номер лицевого счёта..." required {...register("account", { required: "True" })} className="bg-gray-50 py-5 w-full rounded-full px-8 font-semibold text-3xl outline-none placeholder:text-gray-200 placeholder:font-medium"/>
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