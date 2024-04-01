import { useState } from "react";

export default function AuthInput(props) {
    const [value, setValue] = useState("");

    return (
        <label className="w-full">
            <p>{props.label}</p>
            <input
                type={props.type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={props.placeholder}
                className="w-full bg-gray-50 text-2xl placeholder-gray-100 font-medium text-gray-300 outline-none border-solid border-4 border-gray-100 px-5 py-2 rounded-full"
            />
        </label>
    )
}
