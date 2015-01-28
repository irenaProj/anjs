$("document").ready(function() {
    $(".example").on("mousemove", onMouseMove);
    $(".example").on("mouseleave", onMouseLeave);
    $(".example").on("click", onMouseClick);
});

function onMouseMove(e) {
    $(".example").text(e.type + ": " + e.pageX + ", " + e.pageY);
}

function onMouseLeave(e) {
    $(".example").text(e.type + ": mouse has left the area...");
}

function onMouseClick(e) {
    $(".example").text(e.type + ": will not spy on mouse any longer");
    $(".example").off("mouseleave", onMouseLeave);
    $(".example").off("mousemove", onMouseMove);
}