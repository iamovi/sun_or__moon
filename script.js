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
