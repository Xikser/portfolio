//backtotop
$(document).ready(function(){
    let offset = undefined;
    $('body').on("scroll", function () {
        offset =  $('body').scrollTop();
            if(offset >= 200){
                $('.scroll-button').addClass('visible');
            }
            else{
                $('.scroll-button').removeClass('visible');
            }
    });
    $('.scroll-button').on("click", function(){
        $('html, body').animate({scrollTop:0}, '500');
    });
});
