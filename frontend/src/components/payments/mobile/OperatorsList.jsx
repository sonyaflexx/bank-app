import OperatorsItem from "./OperatorsItem"

export default function OperatorsList({ items, handleSelect }) {
    return (
        <div>
            {items.map((obj, index) => <OperatorsItem key={index} Icon={obj.Icon} operator={obj.operator} handleSelect={handleSelect} />)}
        </div>
    )
}