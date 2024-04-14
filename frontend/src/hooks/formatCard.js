export default function formatCard(card_number) {
    let card_number_str = String(card_number)
    const formattedNumber = [
        card_number_str.slice(0, 4),
        card_number_str.slice(4, 8),
        card_number_str.slice(8, 12),
        card_number_str.slice(12, 16)
    ].join(' ')

    return formattedNumber
}