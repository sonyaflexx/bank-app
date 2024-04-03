import { Link } from "react-router-dom";

export default function HomeButton(props) {
    return (
        <Link to={props.href} className="bg-white shadow-xl w-48 h-48 rounded-2xl relative hover:scale-105 transition-all    active:scale-95">
            <p className="absolute font-semibold text-xl top-7 left-7 text-wrap w-32">{props.text}</p>
            <div className="absolute bottom-6 right-9 text-4xl text-gray-300">
                {props.icon}
            </div>
        </Link>
    );
};