$("#header_picture").ready(function(){
    var nwidth  = document.getElementById("header_picture").naturalWidth;
    var nheight = document.getElementById("header_picture").naturalHeight;
    var aspectratio = nwidth/nheight;
    var set_min_width = aspectratio * 400;
    $("#header_picture").css({ "min-width": set_min_width + "px"});
    window.addEventListener('resize', function(){
        if (document.getElementById("header_picture").height == 400) {
            var width_dif = document.getElementById("header_picture").width - document.documentElement.clientWidth;
            var move = width_dif/2;
            $("#header_picture").css({ "left": "-" + move + "px"});
        } else {
            $("#header_picture").css({ "left": "0px"});
        }
    }, true);
});
