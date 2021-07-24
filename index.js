setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    var hours = d.getHours();
    //var hours = 19;
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ampm = "am";
    console.log(d.getMonth());
    console.log(d.getDay());

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (d.getDate() == 25 && d.getMonth() == 11) {
        document.getElementById("bodyId").style.backgroundImage = "url('gege.gif')";
    } else {
        if (hours < 12 && hours > 7) {
            document.getElementById("bodyId").style.backgroundImage = "url('moreflowers.gif')";
        }

        if (hours > 12) {
            hours = hours - 12;
            ampm = "pm";
            //Evening/Night
            if (hours > 6) {
                //console.log("It is after 6pm");
                //var bodyId = document.getElementById("bodyId").style.backgroundImage = "url('AlsoFlowers.gif')";
                //console.log(document.getElementById("bodyId").style.backgroundImage = "url('AlsoFlowers.gif')");
                // document.getElementById(bodyId).style.backgroundImage = "AlsoFlowers.gif";
                document.getElementById("bodyId").style.backgroundImage = "url('AlsoFlowers.gif')";
            }
        }
    }
    // bees
    document.getElementById("demo").innerHTML = hours + ":" +
        minutes + ":" +
        seconds + " " + ampm;
}

$(document).ready(function() {
    $(".music-button .fa-play-circle-o").on("click", function() {
        $(this).hide();
        $(".fa-pause-circle-o").fadeIn();
        $("#myMusic")[0].play();
    });

    $(".music-button .fa-pause-circle-o").on("click", function() {
        $(this).hide();
        $(".fa-play-circle-o").fadeIn();
        $("#myMusic")[0].pause();
    });
});
// Technoblade's head will be valuble im calling it