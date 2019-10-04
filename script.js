function showTime(){

let date = new Date();
let hours = date.getHours(); //0-23
let minutes = date.getMinutes(); //0-59
let seconds = date.getSeconds(); //0-59

let formatHours = convertFormat(hours);  // calling a function

hours = checkTime(hours);                 // calling a function

hours = addZero(hours);                   // calling a function
minutes = addZero(minutes);               // calling a function
seconds = addZero(seconds);               // calling a function


document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`

}

function convertFormat(hours){
 let format = 'AM';
 if(hours >= 12){
    format = 'PM'
 }
 return format
}





function checkTime(time){
if(time>12){
  time = time-12
}
if(time===0){
	time=12
}
return time
}




function addZero(time){
if(time<10){
  time = "0" + time;
}
return time
}


showTime();
setInterval(showTime, 1000)