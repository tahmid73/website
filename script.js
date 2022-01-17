$(document).ready(function(){
    $(".nav-tog").each(function(_,navTog){
        var target=$(navTog).data("target");
        $(navTog).on("click",function(){
            $(target).animate({
                height:"toggle",
            });
        });
    });
});