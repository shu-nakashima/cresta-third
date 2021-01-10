$(function(){
    var imgHeight = $('.kv-wrapper').outerHeight();//.kv-wrapperの画像の高さを取得
    var bgHeight = $('.fv').outerHeight();//.fvの画像の高さを取得
    
    $('.burger-btn').on('click',function(){
        if($(window).scrollTop() < imgHeight -50){
            $('.bar').toggleClass('cross');
            $('.header-nav').toggleClass('open');
            $('.burger-musk').fadeToggle(300);
            ('body').toggleClass('noscroll');
        }else{
            $(this).toggleClass('black');
            $('.bar').toggleClass('cross');
            $('.header-nav').toggleClass('open');
            $('.burger-musk').fadeToggle(300);
            ('body').toggleClass('noscroll');
        }
    });

    $(window).on('load scroll',function(){
        if($(window).scrollTop() < imgHeight -50){
            $('.logo').removeClass('black');
        }else{
            $('.logo').addClass('black');
        }

        if($(window).scrollTop() < bgHeight -50){
            $('.burger-btn').removeClass('black');
        }else{
            $('.burger-btn').addClass('black');
        }
    });
});
