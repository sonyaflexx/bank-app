import { Link } from "react-router-dom";

import Header from "../../components/Header"
import CategoryList from "../../components/payments/CategoryList";
import { CiMobile3 } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";

export default function PaymentsPage() {
    const services = [
        {
            Icon: <CiMobile3 />,
            text: "Мобильная связь",
            href: "/payments/mobile"
        },
        {
            Icon: <BsHouseDoor />,
            text: "Домашний интернет",
            href: "/payments/internet"
        },
        {
            Icon: <TbMoneybag />,
            text: "Налоги",
            href: "/payments/taxes"
        }
    ]

    return (
        <div className="relative flex items-center flex-col bg-white w-full mx-20 pt-7 pb-8 px-10 rounded-2xl shadow-xl">
            <Header title="Оплата услуг" backHref="/" />
            <div className="w-full flex flex-col gap-2">
                <p className="font-medium">Выберите услугу</p>
                <CategoryList items={services}/>
            </div>
            
        </div>
    )
}