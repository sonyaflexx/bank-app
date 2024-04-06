import Header from '../components/Header';
import { FaCheckCircle } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

import { useParams } from 'react-router-dom';

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
            <animated.div style={springProps}>
                <FaCheckCircle size={60} color="green" />
            </animated.div>

            {parsedData.type === "taxes" && 
                <div>
                    <p>В скором времени оплата поступит в ФНС!</p>
                    <div>
                        <p>Информация по оплате:</p>
                        <div>
                            <p>Уникальный идентификатор начислений: {parsedData.uin}</p>
                            <p>Сумма оплаты: {parsedData.amountMoney}</p>
                            <p>Информация по оплате:</p>
                        </div>
                    </div>    
                </div>
            }
        </div>
    )   
}