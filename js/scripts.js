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

/*google analytics*/

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105599225-1', 'auto');
  ga('send', 'pageview');