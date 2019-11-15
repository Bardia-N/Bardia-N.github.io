function todayDate() {
    var d = new Date();
    var p = document.getElementById("mydata");
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    p.innerHTML = "Today is " + day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}