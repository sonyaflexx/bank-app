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
import userStore from "../store/UserStore";
import api from "../api";

export default function TransferPage() {
    const navigate = useNavigate();
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [ visibleAlertBalance, setVisibleAlertBalance ] = useState(false);
    const [ visibleAlertReceiver, setVisibleAlertReceiver ] = useState(false);
    
    const onSubmit = async (data) => {
        try {
            data.type = "transfer";
            data.sender_id = userStore.user.card_number;
            let formattedData = {
                ...data,
                receiver_id: parseInt(data.card_number.replaceAll(' ', ''), 10),
                amount: parseFloat(data.amount.replaceAll(' ', ''))
            };
            
            const response = await api.post('api/transaction/transfer', formattedData);

            if (response.data.success) {
                navigate(`/success/${encodeURIComponent(JSON.stringify(formattedData))}`);
            } 
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setVisibleAlertReceiver(false)
                setVisibleAlertBalance(true);
            }
            if (error.response && error.response.status === 404) {
                setVisibleAlertBalance(false);
                setVisibleAlertReceiver(true)
            }
        }
    };

    return (
        <div className=" relative flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-2xl shadow-xl">
            {visibleAlertBalance && <Alert variant="filled" severity="error" className='fixed top-10'>Недостаточно средств</Alert> }
            {visibleAlertReceiver && <Alert variant="filled" severity="error" className='fixed top-10'>Пользователя с такой картой не существует</Alert> }
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