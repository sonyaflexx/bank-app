import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/buttons/Button";
import MoneyInput from "../components/inputs/MoneyInput";
import api from "../api";
import userStore from "../store/UserStore";

export default function DepositPage() {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        try {
            data.type = "deposit";
            data.receiver_id = userStore.user.card_number
            const response = await api.post('api/transaction/deposit', data);
            if (response.data.success) {
                navigate(`/success/${encodeURIComponent(JSON.stringify(data))}`);
            } else {
                alert(response.data.error);
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="relative flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-2xl shadow-xl">
            <Header title="Внесение средств" backHref="/" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-7"
            >
                <p className="font-medium">Введите сумму, на которую желаете пополнить счёт</p>
                <MoneyInput control={control} error={errors.amountMoney} />
                <Button content="Пополнить"/>
            </form>
        </div>
    );
}