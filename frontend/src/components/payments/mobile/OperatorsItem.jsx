

export default function OperatorsItem(props) {
    return (
        <button onClick={() => props.handleSelect(props.operator)} className="flex items-center font-semibold gap-2 px-2 py-3 rounded-md hover:bg-gray-20 active:scale-95 transition-all w-full">
            <div>{props.Icon}</div>
            <span>{props.operator}</span>
        </button>
    )
}   