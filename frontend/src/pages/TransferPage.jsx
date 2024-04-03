import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/buttons/Button";
import CardNumberInput from "../components/inputs/CardNumberInput";
import BackButton from "../components/buttons/BackButton";
import MoneyInput from "../components/inputs/MoneyInput"

export default function TransferPage() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    
    const submit = data => {
        console.log(data);
    }

    return (
        <div className=" relative flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-2xl shadow-xl">
            <BackButton href="/" />
            <Header title="Перевод средств" />
            <form 
                onSubmit={handleSubmit(submit)}
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