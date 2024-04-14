import Header from "../components/Header"
import { GiBackwardTime } from "react-icons/gi";
import HistoryList from "../components/history/HistoryList";
import BackButton from "../components/buttons/BackButton";
import api from "../api";
import { useState, useEffect } from "react";
import userStore from "../store/UserStore";
import formatMoney from "../hooks/formatMoney";


const getBalance = async () => {
    try {
        const card_number = userStore.user.card_number
        const response = await api.get('api/user/balance', { params: { card_number } });

        return response.data.balance;
    } catch (error) {
        console.error('Ошибка при запросе баланса:', error);
        throw error;
    }
}

const getHistory = async () => {
    try {
        const card_number = userStore.user.card_number
        const response = await api.get('api/user/history', { params: { card_number } });
        return response.data.history;
    } catch (error) {
        console.error('Ошибка при запросе баланса:', error);
        throw error;
    }
}

export default function BalancePage() {
    const [balance, setBalance] = useState(0);
    const [history, setHistory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { balance } = await getBalance();
                const history = await getHistory();

                setBalance(balance);
                setHistory(history.reverse())
            } catch (error) {
                console.error('Ошибка при запросе баланса:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="relative flex items-center flex-col bg-white w-full mx-20 pt-7 pb-8 px-10 rounded-2xl shadow-xl">
            <Header backHref="/"/>
            <div className="flex flex-col gap-7 w-full">
                <div className="flex flex-col items-center gap-1 bg-gray-20 py-5 rounded-lg">
                    <p className="font-semibold text-lg">Ваш баланс</p>
                    <p className="text-4xl font-bold text-green-180">{formatMoney(balance)}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="flex items-center text-lg gap-1 w-full">
                        <span className="text-2xl"><GiBackwardTime /></span>
                        История переводов
                    </p>
                    <HistoryList transactions={history}/>
                </div>
            </div>
        </div>
    )
}