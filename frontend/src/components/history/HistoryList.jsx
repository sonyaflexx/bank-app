import { useEffect } from "react";
import HistoryItem from "./HistoryItem";

export default function HistoryList(props) {
    return (
        <div className="d max-h-96 overflow-y-auto pr-2">
            {props.transactions.map((obj) =>
                <HistoryItem 
                    transaction_type={obj.transaction_type}
                    from={obj.sender_id}
                    to={obj.receiver_id}
                    serviceInfo={obj.service_receiver_info}
                    timestamp={obj.createdAt}
                    amount={obj.amount}
                />
            )}
        </div>
    )
}