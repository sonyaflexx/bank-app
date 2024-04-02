import { Link } from "react-router-dom";

export default function HomeButton(props) {
    return (
        <Link to={props.href} className="m-auto bg-white shadow-xl w-48 h-48 rounded-2xl relative">
            <p className="absolute font-semibold text-xl top-7 left-5 text-wrap w-32">{props.text}</p>
        </Link>
    );
};