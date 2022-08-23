function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  //  ==== for 12 hours clock ===
  //let session = "AM";
  //   if (hour > 12) {
  //     session = "PM";
  //   }
  //==============================

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time = hour + ":" + min + ":" + sec + " "; //+ session for 12 hours clock;

  document.getElementById("clock").innerText = time;
  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
