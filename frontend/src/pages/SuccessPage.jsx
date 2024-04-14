import Header from '../components/Header';
import { FaCheckCircle } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import formatMoney from '../hooks/formatMoney'
import formatCard from '../hooks/formatCard'

// TODO отрефакторить

export default function SuccessPage() {
    const { data } = useParams();
    const parsedData = JSON.parse(decodeURIComponent(data));

    const springProps = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 1000 }
    });

    return (
        <div className="relative flex items-center flex-col bg-white w-full mx-20 pt-7 pb-8 px-10 rounded-2xl shadow-xl">
            <Header title="Успешно!"/>
            <animated.div style={springProps} className="mb-9">
                <FaCheckCircle size={60} color="green" />
            </animated.div>
                <div className="flex flex-col gap-4 w-full">
                    <p className="font-bold">Информация по операции:</p>
                        <div className="bg-gray-20 p-5 mt-2 rounded-md">
                            {parsedData.type === "taxes" && 
                                <>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип операции:</p>
                                        <span>Оплата услуг</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип услуги: </p>
                                        <span>Налоги</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">УИН: </p>
                                        <span>{parsedData.uin}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Сумма: </p>
                                        <span>{formatMoney(parsedData.amount)}</span>
                                    </div>
                                </>
                            }

                            {parsedData.type === "internet" && 
                                <>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип операции:</p>
                                        <span>Оплата услуг</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип услуги: </p>
                                        <span>Домашний интернет</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Номер лицевого счета: </p>
                                        <span>{parsedData.account}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Оператор: </p>
                                        <span>{parsedData.operator}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Сумма: </p>
                                        <span>{formatMoney(parsedData.amount)}</span>
                                    </div>
                                </>
                            }

                            {parsedData.type === "mobile" && 
                                <>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип операции:</p>
                                        <span>Оплата услуг</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип услуги: </p>
                                        <span>Мобильная связь</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Номер телефона: </p>
                                        <span>{parsedData.tel}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Оператор: </p>
                                        <span>{parsedData.operator}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Сумма: </p>
                                        <span>{formatMoney(parsedData.amount)}</span>
                                    </div>
                                </>
                            }

                            {parsedData.type === "transfer" && 
                                <>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип операции: </p>
                                        <span>Перевод</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Куда: </p>
                                        <span>{formatCard(parsedData.receiver_id)}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Сумма: </p>
                                        <span>{formatMoney(parsedData.amount)}</span>
                                    </div>
                                </>
                            }

                            {parsedData.type === "dispense" && 
                                <>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип операции: </p>
                                        <span>Снятие наличных</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Сумма: </p>
                                        <span>{formatMoney(parsedData.amount)}</span>
                                    </div>
                                </>
                            }

                            {parsedData.type === "deposit" && 
                                <>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Тип операции: </p>
                                        <span>Пополнение счёта</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold">Сумма: </p>
                                        <span>{formatMoney(parsedData.amount)}</span>
                                    </div>
                                </>
                            }
                        </div>
                </div>
            <Link to="/" className="mt-5 flex items-center justify-center w-1/2 h-12 bg-green-100 hover:bg-green-20 text-white text-xl font-medium rounded-full transition duration-75 active:bg-green-150 active:scale-95">На главную</Link>
        </div>
    )   
}