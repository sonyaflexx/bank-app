import { useForm } from "react-hook-form"

export default function AuthInput({register, error, validate, ...props}) {

    return (
        <label className="w-full">
            <div className="flex gap-3 items-center">
                <p>{props.label}</p>
                {error && error.type === "required" && (
                    <span className="text-red text-sm">Обязательное поле!</span>
                )}
                {error && error.type === "sameAsPassword" && (
                    <span className="text-red text-sm">Пароли не совпадают!</span>
                )}
            </div>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                {...register(props.name, { required: props.required, validate })}
                className="w-full bg-gray-50 text-2xl placeholder-gray-100 font-medium text-gray-300 outline-none border-solid border-4 border-gray-100 px-5 py-2 rounded-full"
            />
        </label>
    )
}
