var target_milli = new Date("Mar 3, 2024 11:30:0").getTime();

function count() {
    var now_milli = new Date().getTime();
    var remain = Math.floor((target_milli - now_milli)/1000);

    var day = Math.floor((remain / (3600 * 24)));
    var hour = Math.floor((remain % (3600 * 24))/3600);
    var min = Math.floor((remain % 3600)/60);
    var sec = Math.floor(remain % 60);

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;
}

setInterval(count, 1000);