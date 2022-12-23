var now = new Date();
var lastDayOfMonth = new Date(now.getFullYear(), now.getMonth()+1, 0);
let fixLastDayOfMonth = [
    lastDayOfMonth.getFullYear(),
    ('0' + (lastDayOfMonth.getMonth() + 1)).slice(-2),
    ('0' + lastDayOfMonth.getDate()).slice(-2)
].join('');

console.log('====================================');
console.log(fixLastDayOfMonth);
console.log('====================================');