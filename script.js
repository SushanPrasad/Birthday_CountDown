const countdown = () => {
  const countDate = new Date ('Oct 27, 2022 00:00:00').getTime();
  const now= new Date().getTime();
  const gap = countDate - now;

// time work value

  const second = 1000;
  const minute = second * 60;
  const hour= minute * 24;
  const day = hour * 24; 

//Calculation gap

  const textdays = Math.floor(gap / day);
  const texthours = Math.floor((gap % day) / hour);
  const textminutes = Math.floor(( gap % hour) / minute);
  const textseconds = Math.floor((gap % minute) / second);

document.querySelector(".day").innerText =textdays;
document.querySelector(".hour").innerText = texthours;
document.querySelector(".minute").innerText = textminutes;
document.querySelector(".second").innerText = textseconds;

};


//countdown running time

setInterval(countdown, 1000);
