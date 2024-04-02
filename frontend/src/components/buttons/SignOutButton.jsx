import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function SignOutButton() {
    return (
        <Link to="/sign-in" type="submit" className='fixed right-10 top-8 flex items-center gap-2 bg-white font-semibold text-gray-300 border-solid border-4 border-gray-100 p-5 rounded-2xl transition duration-75 hover:bg-gray-20 active:scale-95 z-50 text-xl'>
            <RiLogoutBoxLine />
            <p>Выйти</p>
        </Link>
    )
}