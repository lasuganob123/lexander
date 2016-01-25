$(function() {
    //change header opacity
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
        var heading = $("#head-content");
       if (st > lastScrollTop){
           heading.animate({
               backgroundColor: "rgba(71, 54, 62, 0.9)",
               padding: "15px 25px"
           });
       }
       lastScrollTop = st;
    });
    
});