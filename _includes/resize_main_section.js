// Adjust the main section width and article margins when there isn't a side bar
$(document).ready(function(){
  var sideBarExists = document.getElementById("side_info");
  if (sideBarExists == null) {
    $("#main_section").css({ "width": "100%"});
    $("article footer").css({ "margin-right": "5px"});
  }
});
