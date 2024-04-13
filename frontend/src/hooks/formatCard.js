export default function cardFormat(card_number) {
    const formattedNumber = [
        card_number.slice(0, 4),
        card_number.slice(4, 8),
        card_number.slice(8, 12),
        card_number.slice(12, 16)
    ].join(' ')

    return formattedNumber
}