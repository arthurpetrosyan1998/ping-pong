$(document).ready(menu);

function menu() {
    $("<div/>").attr("id", "menu").
        css({ "position": "absolute" }).appendTo("body");
    $("<img/>").attr("id", "image").attr("src", "images/menu.jpeg").appendTo("#menu");

    $("#image").css({
        "width": "500px",
        "height": "300px",
        "position": "absolute"
    });

    var button = $("<button/>").attr("id", "click").css({
        "width": "50px",
        "height": "20px",
        "top": "20%",
        "left":"50%",
        "position": "absolute"
    }).text("click").appendTo("#menu");
    button.click(function () {
        $("body").empty();
        game();
    });




}