export default function Button(props) {
    return (
        <button type="submit" className="w-1/2 h-12 bg-gradient-to-r from-green-100 to-green-200 text-white text-xl font-medium rounded-full">
            {props.content}
        </button>
    )
}