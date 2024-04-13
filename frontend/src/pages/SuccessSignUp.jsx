import Header from '../components/Header';
import { Link } from 'react-router-dom';
import cardFormat from '../hooks/formatCard';

import { useParams } from 'react-router-dom';

// TODO отрефакторить

export default function SuccessSignUp() {
    const { response } = useParams();
    const parsedResponse = JSON.parse(decodeURIComponent(response));

    return (
        <div className="relative flex items-center flex-col bg-white w-full mx-20 pt-7 pb-8 px-10 rounded-2xl shadow-xl">
            <Header title="Карта успешно создана!"/>
                <div className="flex flex-col w-full">
                    <p className="font-bold">Реквизиты:</p>
                    <div className="bg-gray-20 p-5 mt-2 rounded-md">
                        <div className="flex gap-2">
                            <p className="font-semibold">Номер карты: </p>
                            <span>{ cardFormat(parsedResponse.card_number) }</span>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold">Имя: </p>
                            <span>{parsedResponse.firstname}</span>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold">Фамилия: </p>
                            <span>{parsedResponse.lastname}</span>
                        </div>
                    </div>
                </div>
                <Link to="/" className="mt-5 flex items-center justify-center w-1/2 h-12 bg-green-100 hover:bg-green-20 text-white text-xl font-medium rounded-full transition duration-75 active:bg-green-150 active:scale-95">Продолжить</Link>
        </div>
    )   
}