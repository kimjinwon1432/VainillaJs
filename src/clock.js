const clockLabel=document.querySelector("#clockDiv span label:last-child");
const dayLabel = document.querySelector("#clockDiv span label:first-child")
function setClock(){
    const date = new Date();

    const dates ={
        Year: date.getFullYear(),
        Month: date.getMonth(),
        Date: date.getDate(),
        Day: date.getDay()
    }
    const days=["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    
    const strHours = hours.padStart(2, '0');
    const strMinutes = minutes.padStart(2,'0');
    const strSeconds = seconds.padStart(2,'0');
    console.log(dates["Year"])
    //console.log(days[dates["Day"]])
    dayLabel.innerHTML = `${dates["Year"]}. ${dates["Month"]}. ${dates["Date"]}. (${days[dates["Day"]]})`
    clockLabel.innerHTML=`${strHours} : ${strMinutes} : ${strSeconds}`;
}

setClock();
setInterval(setClock, 1000);