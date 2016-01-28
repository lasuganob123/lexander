$(function() {
    //change header opacity
    $(function() {
        var $win = $(window);
        $win.scroll(function () {
            if ($win.scrollTop() == 0) {
                $('header').attr('style', 'background-color: rgba(71, 54, 62, 0.5) !important');
            }else if($win.scrollTop() > 0) {
                $('header').attr('style', 'background-color: rgb(71, 54, 62) !important; box-shadow: none;');
            } 
        });        
    });
    
    //expandable divisions 
    
    var techInside = $('div.tech-inside');
    
    $('div.contain-desc').hide();
    
    techInside.click(
    function() {
       $(this).find('div.contain-desc').slideToggle("slow"); 
    });
});