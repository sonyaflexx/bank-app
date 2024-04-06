import BackButton from "./buttons/BackButton";

export default function Header(props) {
    return (
        <div className="w-full mb-8 flex items-center flex-col">
            {props.backHref && <BackButton href={props.backHref} />}
            <h1 className="text-green-200 text-3xl font-bold">ККРИТ БАНК</h1>
            <p>{props.title}</p>
        </div>
    );
}