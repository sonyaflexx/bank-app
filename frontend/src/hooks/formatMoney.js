export default function formatMoney(number) {
    let numStr = String(number);
    
    const parts = numStr.split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1] ? `.${parts[1]}` : '';
    
    let formattedIntegerPart = '';
    while (integerPart.length > 3) {
        formattedIntegerPart = ` ${integerPart.slice(-3)}${formattedIntegerPart}`;
        integerPart = integerPart.slice(0, -3);
    }
    formattedIntegerPart = integerPart + formattedIntegerPart;
    
    return formattedIntegerPart + decimalPart + ' ₽';
}