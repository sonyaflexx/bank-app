import { Controller } from 'react-hook-form';
import { useState } from 'react';

export default function CardNumberInput({ control }) {

    const [width, setWidth] = useState(1);
  
    const changeHandler = value => {
        if (value.length < 2) {
            return
        } 
        setWidth(value.length);
    };

    return (
        <label className="flex justify-center items-center text-4xl font-semibold text-green-50 bg-gray-20 py-5 px-7 rounded-full">
            <Controller
                name="amountMoney"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type="text"
                        maxLength={19}
                        placeholder="0"
                        autoFocus
                        autoComplete="off"
                        className="placeholder:text-green-50 outline-none w-96 bg-gray-20"
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ").trim();
                            
                            field.onChange(value);
                        }}
                    />
                )}
                rules={{
                    validate: {
                      required: (value) => {
                        if (!value) return '*Required';
                      }
                    },
                    minLength: 1,
                  }}
            />
            <div>₽</div>
        </label>
    );
}