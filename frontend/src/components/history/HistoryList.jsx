import HistoryItem from "./HistoryItem";

export default function HistoryList() {
    const transfers = [
        {
            type: "outgoing",
            to: "0000 0000 0000 0000",
            amountMoney: "230"
        },
        {
            type: "incoming",
            to: "0000 0000 0000 0000",
            amountMoney: "100 000"
        },
        {
            type: "outgoing",
            to: "0000 0000 0000 0000",
            amountMoney: "230"
        },
        {
            type: "incoming",
            to: "0000 0000 0000 0000",
            amountMoney: "10"
        },
        {
            type: "outgoing",
            to: "0000 0000 0000 0000",
            amountMoney: "230"
        },
        {
            type: "outgoing",
            to: "0000 0000 0000 0000",
            amountMoney: "230"
        },
        {
            type: "outgoing",
            to: "0000 0000 0000 0000",
            amountMoney: "230"
        },
        {
            type: "incoming",
            to: "0000 0000 0000 0000",
            amountMoney: "10"
        },
        {
            type: "outgoing",
            to: "0000 0000 0000 0000",
            amountMoney: "230"
        },
    ];

    return (
        <div className="d max-h-96 overflow-y-auto pr-2">
            {transfers.map((obj) =>
                <HistoryItem 
                    type={obj.type}
                    to={obj.to}
                    amountMoney={obj.amountMoney}
                />
            )}
        </div>
    )
}