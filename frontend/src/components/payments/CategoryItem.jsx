import { CiMobile3 } from "react-icons/ci"
import { Link } from "react-router-dom"

export default function CategoryItem(props) {
    return (
        <Link to={props.href} className="flex items-center font-semibold gap-2 px-2 py-3 rounded-md hover:bg-gray-20 active:scale-95 transition-all">
            <span className="text-4xl text-green-200">{props.Icon}</span>
            <span>{props.text}</span>
        </Link>
    )
}