const default_tip_rate = 0.18

function calculate_tip(amount, rate = default_tip_rate) {
    return amount * rate;
}

function calculate_total (amount, rate = default_tip_rate) {
    const tip = calculate_tip(amount, rate);
    return amount + tip;
}

function split_bill(amount, rate = default_tip_rate, diners = 1){
    const total = calculate_total(amount, rate);
    return total / diners;
}

console.log(split_bill(86.40, 0.20, 4));