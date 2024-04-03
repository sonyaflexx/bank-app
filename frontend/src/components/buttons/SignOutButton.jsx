import { useContext } from "react";

import { RiLogoutBoxLine } from "react-icons/ri";
import { AuthContext } from "../../context/AuthContext";

export default function SignOutButton() {
    const { logout } = useContext(AuthContext);

    return (
        <button onClick={logout} type="submit" className='fixed right-10 top-8 flex items-center gap-2 bg-white font-semibold text-gray-300 border-solid border-4 border-gray-100 p-5 rounded-2xl transition duration-75 hover:bg-gray-20 active:scale-95 z-50 text-xl'>
            <RiLogoutBoxLine />
            <p>Выйти</p>
        </button>
    )
}