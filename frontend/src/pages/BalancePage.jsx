import Header from "../components/Header"
import { GiBackwardTime } from "react-icons/gi";
import HistoryList from "../components/history/HistoryList";
import BackButton from "../components/buttons/BackButton";

export default function BalancePage() {
    return (
        <div className="relative flex items-center flex-col bg-white w-full mx-20 pt-7 pb-8 px-10 rounded-2xl shadow-xl">
            <Header backHref="/"/>
            <div className="flex flex-col gap-7 w-full">
                <div className="flex flex-col items-center gap-1 bg-gray-20 py-5 rounded-lg">
                    <p className="font-semibold text-lg">Ваш баланс</p>
                    <p className="text-4xl font-bold text-green-180">100 ₽</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="flex items-center text-lg gap-1 w-full">
                        <span className="text-2xl"><GiBackwardTime /></span>
                        История переводов
                    </p>
                    <HistoryList />
                </div>
            </div>
        </div>
    )
}