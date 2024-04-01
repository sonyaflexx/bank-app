import { useState } from "react";

export default function CardNumberInput() {
    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (event) => {
      const input = event.target.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
      const formattedNumber = input.replace(/(.{4})/g, '$1 ').trim(); // Вставляем пробелы после каждых 4 символов
  
      if (input.length <= 16) {
        setCardNumber(formattedNumber);
      }
    };

    return (
        <label className="w-full">
            <p>Номер карты</p>
            <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
                placeholder="0000 0000 0000 0000"
                className="w-full bg-gray-50 text-2xl placeholder-gray-100 font-medium text-gray-300 outline-none border-solid border-4 border-gray-100 px-5 py-2 rounded-full"
            />
        </label>
    )
}

