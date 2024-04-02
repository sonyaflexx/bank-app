import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

export default function BackButton(props) {
    return (
        <Link to={props.href} type="submit" className='absolute transition duration-75 active:scale-95 z-50 top-9 left-12 text-3xl'>
            <SlArrowLeft />
        </Link>
    )
}