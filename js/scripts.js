/*smooth scroll to interal link*/
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
         
        var target = this.hash,
        $target = $(target);
         
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

/*faq slide down*/
$(document).ready(function(){
    $(".answer").hide();
        $(".question").click(function(){
        $(this).next(".answer").slideToggle('average');
    }); 
}); 

/*scroll to top*/
$(document).ready(function(){
 
    var amountScrolled = 100;
   
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn("");
        } else {
            $('a.back-to-top').fadeOut("");
        }
    });
   
    $('a.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0}, 700);
        return false;
    });
 
});