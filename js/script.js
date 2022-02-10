function countdown(){
    const countDate = new Date("Oct 24, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const sec = 1000;
    const min = sec * 60;
    const hrs = min * 60;
    const day = hrs * 24;

    const textday = Math.floor(gap/day);
    const texthrs = Math.floor((gap%day)/hrs);
    const textmin = Math.floor((gap%hrs)/min);
    const textsec = Math.floor((gap%min)/sec);

    document.querySelector('.day').innerHTML = textday;
    document.querySelector('.hour').innerHTML = texthrs;
    document.querySelector('.minute').innerHTML = textmin;
    document.querySelector('.second').innerHTML = textsec;
};

setInterval(countdown, 1000);