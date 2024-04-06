import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/buttons/Button";
import MoneyInput from "../components/inputs/MoneyInput";

export default function DepositPage() {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        data.type = "deposit";
        const dataStr = JSON.stringify(data);
        // TODO POST запрос на пополнение
        navigate(`/success/${encodeURIComponent(dataStr)}`)
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