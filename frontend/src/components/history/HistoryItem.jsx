import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaArrowAltCircleDown, FaHome } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import formatMoney from '../../hooks/formatMoney'
import formatCard from '../../hooks/formatCard'
import userStore from "../../store/UserStore";
import { CiMobile3 } from "react-icons/ci";


export default function HistoryItem(props) {
    return (
        <>
            {props.transaction_type === 'Пополнение' && 
                <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
                    <span className="text-green-200 text-5xl"><FaArrowAltCircleUp/></span>
                    <div className="flex flex-col">
                        <span className="font-bold">Пополнение наличными</span>
                        <span className="font-medium text-sm">Операция с наличными</span>
                    </div>
                    <span className="ml-auto font-semibold text-lg text-green-200">+{formatMoney(props.amount)}</span>
                </div>  
            }
            
            {props.transaction_type === 'Снятие наличных' &&
                <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
                    <span className="text-green-200 text-5xl"><FaArrowAltCircleDown /></span>
                    <div className="flex flex-col">
                        <span className="font-bold">Снятие наличных</span>
                        <span className="font-medium text-sm">Операция с наличными</span>
                    </div>
                    <span className="ml-auto font-semibold text-lg text-red">-{formatMoney(props.amount)}</span>
                </div>
            }
            
            {props.transaction_type === 'Перевод' &&
                props.from === userStore.user.card_number &&
                        <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
                            <span className="text-green-200 text-5xl"><FaArrowAltCircleRight /></span>
                            <div className="flex flex-col">
                                <span className="font-bold">Исходящий перевод</span>
                                <span className="font-medium text-sm">Куда: {formatCard(props.to)}</span>
                            </div> 
                            <span className="ml-auto font-semibold text-lg text-red">-{formatMoney(props.amount)}</span>
                        </div>
            }

            {props.transaction_type === 'Перевод' &&
                props.to === userStore.user.card_number &&
                        <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
                            <span className="text-green-200 text-5xl"><FaArrowAltCircleLeft /></span>
                            <div className="flex flex-col">
                                <span className="font-bold">Входящий перевод</span>
                                <span className="font-medium text-sm">Откуда: {formatCard(props.from)}</span>
                            </div>
                            <span className="ml-auto font-semibold text-lg text-green-200">+{formatMoney(props.amount)}</span>
                        </div>
            }

            {props.transaction_type === 'Мобильная связь'  &&
                <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
                    <span className="bg-green-200 text-3xl text-white p-2 rounded-full mx-px"><CiMobile3 /></span>
                        <div className="flex flex-col">
                            <span className="font-bold">Мобильная связь</span>
                            <span className="font-medium text-sm">Куда: {props.serviceInfo}</span>
                        </div> 
                    <span className="ml-auto font-semibold text-lg text-red">-{formatMoney(props.amount)}</span>
                </div>
            }

            {props.transaction_type === 'Домашний интернет'  &&
                <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
                    <span className="bg-green-200 text-3xl text-white p-2 rounded-full mx-px"><FaHome /></span>
                        <div className="flex flex-col">
                            <span className="font-bold">Домашний интернет</span>
                            <span className="font-medium text-sm">Счёт: {props.serviceInfo}</span>
                        </div> 
                    <span className="ml-auto font-semibold text-lg text-red">-{formatMoney(props.amount)}</span>
                </div>
            }

            {props.transaction_type === 'Налоги'  &&
                <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
                    <span className="bg-green-200 text-3xl text-white p-2 rounded-full mx-px"><TbMoneybag /></span>
                        <div className="flex flex-col">
                            <span className="font-bold">Налоги</span>
                            <span className="font-medium text-sm">УИН: {props.serviceInfo}</span>
                        </div> 
                    <span className="ml-auto font-semibold text-lg text-red">-{formatMoney(props.amount)}</span>
                </div>
            }
        </>
    )
}