import { useState } from "react";

import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/buttons/Button";
import MoneyInput from "../components/inputs/MoneyInput";
import BackButton from "../components/buttons/BackButton";
import Loading from "../components/Loading";
import userStore from "../store/UserStore";
import api from "../api";

export default function DispensePage() {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [ visibleAlert, setVisibleAlert ] = useState(false);

    const onSubmit = async (data) => {
        try {
            data.type = "dispense";
            data.receiver_id = userStore.user.card_number;
            let formattedData = {
                ...data,
                amount: parseFloat(data.amount.replaceAll(' ', ''))
            };
            
            const response = await api.post('api/transaction/dispense', formattedData);

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
            <Header title="Снятие средств" backHref="/" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-7"
            >
                <p className="font-medium">Введите сумму, которую желаете снять со счёта</p>
                <MoneyInput control={control} error={errors.amountMoney} />
                <Button content="Снять"/>
            </form>
            <Loading />
        </div>
    );
}