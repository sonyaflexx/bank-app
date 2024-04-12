import { Controller } from 'react-hook-form';

export default function CardNumberInput({ control, error, ...props }) {
    return (
        <label className="w-full">
            <div className="flex gap-3 items-center">
                <p>{props.label}</p>
                {error && error.type === "required" && (
                    <span className="text-red text-sm">Обязательное поле!</span>
                )}
                {error && error.type === "minLength" || error && error.type === "maxLength" && (
                    <span className="text-red text-sm">Неверный формат!</span>
                )}
            </div>
            <Controller
                name="card_number"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type="text"
                        maxLength={19}
                        pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
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
                          if (!value) {
                            return 'Поле обязательно для заполнения';
                          }
                        },
                        maxLength: (value) => {
                          if (value.length != 19) {
                            return 'Не соответствует формату';
                          }
                        },
                        minLength: (value) => {
                          if (value.length < 19) {
                            return ('Не соответствует формату');
                          }
                        }
                      }
                  }}
            />
        </label>
    );
}