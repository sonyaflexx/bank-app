import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function HistoryItem(props) {
    return (
        <div className="w-full flex gap-3 p-3 items-center rounded-md"> { /* На будущее: hover:cursor-pointer hover:bg-gray-20 active:scale-95 transition-all duration-100 */ }
            <span className="text-green-200 text-5xl">
                {props.type === "outgoing" ? <FaArrowAltCircleRight/> : <FaArrowAltCircleLeft/>}
            </span>
            <div className="flex flex-col">
                <span className="font-bold">{props.type === "outgoing" ? "Исходящий перевод" : "Входящий перевод"}</span>
                <span className="font-medium text-sm">{props.type === "outgoing" ? "Куда:" : "Откуда:"} {props.to}</span>
            </div>
            {props.type === "outgoing" 
            ? <span className="ml-auto font-semibold text-lg text-red">-{props.amountMoney}₽</span>
            : <span className="ml-auto font-semibold text-lg text-green-200">+{props.amountMoney}₽</span>}
        </div>
    )
}