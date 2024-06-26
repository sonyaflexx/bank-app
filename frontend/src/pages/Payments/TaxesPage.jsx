import { useState } from "react";

import Alert from '@mui/material/Alert';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import MoneyInput from "../../components/inputs/MoneyInput";
import Button from "../../components/buttons/Button";
import api from "../../api";
import userStore from "../../store/UserStore";

export default function TaxesPage(props) {
    const navigate = useNavigate();
    const [ visibleAlert, setVisibleAlert ] = useState(false);
    const { control, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            data.type = "taxes";
            data.sender_id = userStore.user.card_number;
            let formattedData = {
                ...data,
                amount: parseFloat(data.amount.replaceAll(' ', ''))
            };
            
            const response = await api.post('api/transaction/payments/taxes', formattedData);

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
            <Header title={"Оплата налогов ФНС"} backHref="/payments" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-4"
            >
                <label className="flex flex-col items-center gap-2">
                    <div className="flex gap-4 w-full pl-3">
                    <p className="font-medium ">Введите УИН</p>
                    {errors.uin && (
                        <p className="text-red">Неверный формат</p>
                    )}
                    </div>
                    <input type="text" name="UIN" minLength={20} maxLength={25} placeholder="00000000000000000000" required {...register("uin", { required: "True", minLength: 20, maxLength: 25 })} className="bg-gray-50 py-5 w-full rounded-full px-8 font-semibold text-3xl outline-none placeholder:text-gray-200 placeholder:font-medium"
                        onChange={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                    />
                </label>
                <div className="flex flex-col items-center gap-2">
                    <p className="font-medium">Введите сумму, которую желаете потратить на оплату</p>
                    <MoneyInput control={control} error={errors.amountMoney} />
                </div>
                <Button content="Пополнить"/>
            </form>
        </div>
    );
}