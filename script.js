// script.js
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'interactive') {
      document.getElementById('sun').style.visibility="hidden";
      document.getElementById('moon').style.visibility="hidden";
      document.getElementById('toggleBtn').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.visibility="hidden";
          document.getElementById('sun').style.visibility="visible";
          document.getElementById('moon').style.visibility="visible";
          document.getElementById('toggleBtn').style.visibility="visible";
      },1000);
  }
}


document.getElementById("toggleBtn").addEventListener("click", function() {
    var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");
    var body = document.body;

    if (sun.classList.contains("visible")) {
        sun.classList.remove("visible");
        sun.classList.add("hidden");
        moon.classList.remove("hidden");
        moon.classList.add("visible");
        body.style.backgroundColor = "black"; // Change background color to black
    } else {
        moon.classList.remove("visible");
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
        sun.classList.add("visible");
        body.style.backgroundColor = ""; // Reset background color
    }
});
