$(document).ready(function(){
    $(".box").hover(
        function() {$(this).attr("src","images/milkyway.png");},
        function() {$(this).attr("src","images/about.png");
    });
});
