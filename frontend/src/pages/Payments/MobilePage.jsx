import Header from "../../components/Header"
import OperatorsList from "../../components/payments/mobile/OperatorsList";
import { useState } from "react";
import PaymentMobileForm from "../../components/PaymentMobileForm";

export default function MobilePage() {
    const [operator, setOperator] = useState(null);

    const handleSelect = (option) => {
        setOperator(option);
    };

    const operators = [
        {
            Icon: <img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-logotip-mts-prozrachnii-fon-17.png" className="w-7 h-7 ml-1 mr-1" />,
            operator: "МТС",
        },
        {
            Icon: <img src="https://avatars.mds.yandex.net/get-socsnippets/12372969/2a0000018ea4ce77f71455c74ecc7abac776/square_83" className="w-9 h-9 rounded-full"/>,
            operator: "Мегафон",
        },
        {
            Icon: <img src="https://mallcollage.com/wp-content/uploads/2020/08/tele2-ab-logo-1024x1024.png" className="w-7 h-7 ml-1 mr-1" />,
            operator: "Теле2",
        },
        {
            Icon: <img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-znak-bilain-na-prozrachnom-fone-7.png" className="w-7 h-7 ml-1 mr-1" />,
            operator: "Билайн",
        }
    ]

    return (
        <>
        {operator
        ?
        <PaymentMobileForm operator={operator}/>
        :    
        <div className="relative flex items-center flex-col bg-white w-full mx-20 pt-7 pb-8 px-10 rounded-2xl shadow-xl">
            <Header title="Оплата мобильной связи" backHref="/payments" />
            <div className="w-full flex flex-col gap-2">
                <p className="font-medium">Выберите оператора</p>
                <OperatorsList items={operators} handleSelect={handleSelect} />
            </div>
        </div>    
    }

        </>
    )
}