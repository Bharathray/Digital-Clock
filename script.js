var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var period = document.getElementById("period");

var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      var pe = "AM";
      
      if(hr > 0){
        hr = hr -12;
        pe = "PM";
      }
      if(hr == 0){
        hr = 12;
      }
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }
      
      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;
      period.textContent = pe;
      
    },1000
 );
