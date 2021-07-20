function currentTime(){
        let options = {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
        };
        console.log( new Intl.DateTimeFormat([], options).format(new Date()))
}
setInterval(currentTime,10000)
