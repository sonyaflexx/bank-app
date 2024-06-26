import HomeButton from "../components/buttons/HomeButton";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { RxPinTop, RxPinBottom } from "react-icons/rx";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import SignOutButton from "../components/buttons/SignOutButton";
import userStore from "../store/UserStore";
import formatCard from "../hooks/formatCard";

export default function Home() {
    const {user} = userStore
    const cardNumber = formatCard(user.card_number)
    const name = [user.lastname, user.firstname].join(' ')

    return (
        <>
            <SignOutButton />
            <div className="flex flex-col h-full w-full mx-5 py-10">
                <div className="relative flex align-center items-center bg-gradient-to-r from-green-100 to-green-200 h-96 rounded-2xl shadow-2xl">
                    <p className="absolute text-white font-bold text-3xl top-6 right-10">KKRIT BANK</p>
                    <div className="text-white ml-8">
                        <p className="font-bold text-4xl leading-8">{cardNumber}</p>
                        <p className="font-light text-2xl">{name}</p>
                    </div>
                </div>
                <div className="flex-1 py-10 flex flex-wrap content-between justify-center gap-7">
                    <HomeButton href="/balance" text="Узнать счёт" icon={<HiOutlineBanknotes />}/>
                    <HomeButton href="/deposit" text="Внести" icon={<RxPinTop />}/>
                    <HomeButton href="/dispense" text="Снять" icon={<RxPinBottom />} />
                    <HomeButton href="/transfer" text="Перевести" icon={<FaMoneyBillTransfer />}/>
                    <HomeButton href="/payments" text="Оплатить услуги" icon={<MdHomeRepairService />}/>
                </div>
            </div>
        </>
    );
};