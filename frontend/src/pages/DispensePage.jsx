import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/buttons/Button";
import MoneyInput from "../components/inputs/MoneyInput";
import BackButton from "../components/buttons/BackButton";

export default function DispensePage() {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="relative flex items-center flex-col gap-1 bg-white w-full mx-20 pt-5 pb-8 rounded-2xl shadow-xl">
            <BackButton href="/" />
            <Header title="Снятие средств" />
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full px-12 flex flex-col items-center gap-7"
            >
                <p className="font-medium">Введите сумму, которую желаете снять со счёта</p>
                <MoneyInput control={control} />
                <Button content="Снять"/>
            </form>
        </div>
    );
}