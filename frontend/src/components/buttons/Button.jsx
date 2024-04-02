export default function Button(props) {
    return (
        <button type="submit" className='w-1/2 h-12 bg-green-100 hover:bg-green-20 text-white text-xl font-medium rounded-full transition duration-75 active:bg-green-150 active:scale-95'>
            {props.content}
        </button>
    )
}