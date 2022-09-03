console.log('hello')

function clock(){
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');
  const session = document.getElementById('session');

  let date = new Date();
  let hrs = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
 
 
  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;

  if(hrs >= 12){
    session.innerHTML = 'PM'
  }else{
    session.innerHTML = 'AM'

  }
  
}

const interval = setInterval(clock, 1000)