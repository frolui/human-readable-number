module.exports = function toReadable (number) {
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
          dozens = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
          discharges = ['hundred', 'thousand'];

    if (number == 0) {
        return 'zero';
    } else if (number < 20) {
        return units[number - 1];
    } else if (number < 100) {
        return doz(number);
    } else if (number % 100 == 0) {
        return units[Math.trunc(number / 100 -1)] + ' ' + discharges[0];
    } else if (number < 1000) {
        return units[Math.trunc(number / 100) -1] + ' ' + discharges[0] + ' ' + doz(number % 100);
    } 

    function doz(n) { 
        if (n % 10 == 0){
            return dozens[Math.trunc(n / 10) - 1];
        } else if (n < 20) {
            return units[n - 1];
        } else { 
            return dozens[Math.trunc(n / 10) - 1] + ' ' + units[n % 10 - 1];
        }
    }
}

console.log(34 % 10 - 1);
