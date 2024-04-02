import { Controller } from 'react-hook-form';

export default function CardNumberInput({ control, ...props }) {
    return (
        <label className="w-full">
            <p>{props.label}</p>
            <Controller
                name="cardNumber"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type="text"
                        maxLength={19}
                        placeholder="0000 0000 0000 0000"
                        className="w-full bg-gray-50 text-2xl placeholder-gray-100 font-medium text-gray-300 outline-none border-solid border-4 border-gray-100 px-5 py-2 rounded-full"
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                            field.onChange(value);
                        }}
                    />
                )}
                rules={{
                    validate: {
                      required: (value) => {
                        if (value === "SomeValue") return 'Some Message';
                        if (!value) return '*Required';
                      }
                    },
                    maxLength: 19,
                    minLength: 19,
                  }}
            />
        </label>
    );
}