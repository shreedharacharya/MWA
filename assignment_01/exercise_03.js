
function IsWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    let days = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend']
    return days[day];
} 
console.log(IsWeekend());