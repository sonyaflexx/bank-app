import { useForm } from "react-hook-form";

export default function AuthInput({register, ...props}) {

    return (
        <label className="w-full">
            <p>{props.label}</p>
            <input
                type={props.type}
                placeholder={props.placeholder}
                {...register(props.name)}
                className="w-full bg-gray-50 text-2xl placeholder-gray-100 font-medium text-gray-300 outline-none border-solid border-4 border-gray-100 px-5 py-2 rounded-full"
            />
        </label>
    )
}
