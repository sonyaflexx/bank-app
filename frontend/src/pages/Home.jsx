import HomeButton from "../components/buttons/HomeButton";

export default function Home() {
    return (
        <div className="flex flex-col h-full w-full mx-5 py-10">
            <div className="relative flex align-center items-center bg-gradient-to-r from-green-100 to-green-200 h-96 rounded-2xl">
                <p className="absolute text-white font-bold text-3xl top-6 right-10">KKRIT BANK</p>
                <div className="text-white ml-5">
                    <p className="font-bold text-4xl leading-8">0000 0000 0000 0000</p>
                    <p className="font-light text-2xl">Имя Фамилия</p>
                </div>
            </div>
            <div className="flex-1 py-10 flex flex-wrap justify-center">
                <HomeButton href="/sign-in" text="Узнать счёт"/>
                <HomeButton href="/sign-in" text="Внести"/>
                <HomeButton href="/sign-in" text="Снять"/>
                <HomeButton href="/sign-in" text="Перевести"/>
                <HomeButton href="/sign-in" text="Оплатить услуги"/>
            </div>
        </div>
    );
};