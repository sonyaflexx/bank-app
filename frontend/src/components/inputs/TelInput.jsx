import { Controller } from 'react-hook-form';

export default function TelInput({control}) {
    return (
    <div className="flex justify-center gap-2 items-center text-4xl font-semibold bg-gray-20 py-5 px-7 rounded-full">
                        <span>+7</span>
                        <Controller
                        name="tel"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="tel"
                                maxLength={13}
                                pattern="[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
                                placeholder="000 000 00 00"
                                autoFocus
                                autoComplete="off"
                                className="placeholder:text-gray-200 outline-none w-8/12 bg-gray-20"
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
                                    
                                    field.onChange(value);
                                }}
                            />
                        )}
                        rules={{
                            validate: {
                            required: (value) => {
                                if (!value || value === '0') return '*Required';
                            }
                            },
                        }}
                        />
                    </div>
    )
}